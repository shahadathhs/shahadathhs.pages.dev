import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || 'shahadathhs';

  try {
    const rssUrl = `https://medium.com/feed/@${username}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from rss2json: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.status !== 'ok') {
      throw new Error(`rss2json error: ${data.message}`);
    }

    // Map to MediumPost interface
    const posts = data.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      author: item.author,
      content: item.content,
      contentSnippet: item.description
        .replace(/<[^>]*>?/gm, '')
        .substring(0, 200),
      categories: item.categories,
    }));

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error in Medium API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Medium posts' },
      { status: 500 },
    );
  }
}
