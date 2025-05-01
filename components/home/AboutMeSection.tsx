import { WarpBackground } from "../magicui/warp-background";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function AboutMeSection() {
  return (
    <WarpBackground>
      <div className="flex flex-col items-center justify-center h-full">
        <Card className="w-full h-auto">
          <CardContent className="flex flex-col gap-2 p-4">
            <CardTitle>Congratulations on Your Promotion!</CardTitle>
            <CardDescription>
              Your hard work and dedication have paid off. We&apos;re thrilled
              to see you take this next step in your career. Keep up the
              fantastic work!
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </WarpBackground>
  );
}
