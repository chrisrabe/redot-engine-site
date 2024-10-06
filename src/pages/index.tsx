import Announcements from "@/components/sections/Announcements";
import Community from "@/components/sections/Community";
import Features from "@/components/sections/Features";
import Landing from "@/components/sections/Landing";

export default function Home() {
  return (
    <>
      <Landing />
      <Announcements />
      <Features />
      <Community />
    </>
  );
}
