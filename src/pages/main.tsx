import { Badge } from "@/components/ui/badge";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  LayoutDashboard,
  Settings,
  Github,
  Scroll,
  SquareMousePointer,
} from "lucide-react";

export default function MainPage() {
  return (
    <main className="w-full h-[100vh] flex justify-center items-center flex-col">
      <div className="flex flex-col items-center justify-center">
        <Badge variant={"secondary"} className="mb-1">
          Project Odin
        </Badge>
        <h1 className="text-5xl font-bold uppercase">Developer Client</h1>
        <p className="text-xl">A client for the Developer API.</p>
      </div>
      <Dock>
        <DockIcon>
          <HoverCard closeDelay={0} openDelay={0}>
            <HoverCardTrigger>
              <a href="https://youtube.com" target="_blank">
                <LayoutDashboard />
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Dashboard</h4>
                  <p className="text-sm">
                    Easily manage your projects and measure their status with
                    our intuitive dashboard interface.
                  </p>
                  <div className="flex items-center pt-2">
                    <SquareMousePointer className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Click to continue
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </DockIcon>
        <DockIcon>
          <HoverCard closeDelay={0} openDelay={0}>
            <HoverCardTrigger>
              <a href="https://github.com/odin-store/" target="_blank">
                <Settings />
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    Manage Your Products
                  </h4>
                  <p className="text-sm">
                    Manage your games registered on Odin more easily and quickly
                    than anyone else.
                  </p>
                  <div className="flex items-center pt-2">
                    <SquareMousePointer className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Click to continue
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </DockIcon>
        <DockIcon>
          <HoverCard closeDelay={0} openDelay={0}>
            <HoverCardTrigger>
              <a href="https://github.com/odin-store/" target="_blank">
                <Scroll />
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Api Documents</h4>
                  <p className="text-sm">
                    Odin offers a variety of APIs that can be helpful for
                    developers. Refer to the documentation for more details.
                  </p>
                  <div className="flex items-center pt-2">
                    <SquareMousePointer className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Click to continue
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </DockIcon>
        <DockIcon>
          <HoverCard closeDelay={0} openDelay={0}>
            <HoverCardTrigger>
              <a href="https://github.com/odin-store/" target="_blank">
                <Github />
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Github</h4>
                  <p className="text-sm">
                    Odin is an open-source indie gaming store, and all source
                    code will be released soon.
                  </p>
                  <div className="flex items-center pt-2">
                    <SquareMousePointer className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Click to continue
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </DockIcon>
      </Dock>
    </main>
  );
}
