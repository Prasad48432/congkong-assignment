"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, CreditCard, LogOut, MoveRight, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { data } from "./app-sidebar";

export function SiteHeader({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const pathname = usePathname();
  // Combine both arrays
  const allItems = [
    ...data.navMain,
    ...(data.tools ?? data.navSecondary ?? []),
  ];

  // Find the matching item
  const activeItem = allItems.find((item) => pathname.startsWith(item.url));
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">
          {activeItem
            ? "title" in activeItem
              ? activeItem.title
              : activeItem.name
            : "Dashboard"}
        </h1>

        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                asChild
                size="icon"
                className="flex rounded-full group"
              >
                <span className="text-foreground relative">
                  <span className="group-hover:hidden absolute top-[30%] right-[10px] -translate-y-[30%] w-1.5 h-1.5 flex items-center justify-center">
                    <span className="absolute w-full h-full bg-green-400 rounded-full" />
                    <span className="absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                  </span>
                  <Bell />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="min-w-64 rounded-lg py-2"
              side="bottom"
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-sm font-semibold text-foreground px-2 py-1.5">
                Notifications
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              {/* Example Notification Item */}
              <span className="flex items-start gap-2 px-2 py-2">
                <Bell className="mt-0.5 size-4 text-primary" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium leading-tight">
                    New meeting scheduled
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Your next 1:1 with Sarah is tomorrow at 10 AM.
                  </span>
                </div>
              </span>

              <span className="flex items-start gap-2 px-2 py-2">
                <User className="mt-0.5 size-4" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium leading-tight">
                    New user joined
                  </span>
                  <span className="text-xs text-muted-foreground">
                    John Doe signed up just now.
                  </span>
                </div>
              </span>

              <span className="flex items-start gap-2 px-2 py-2">
                <CreditCard className="mt-0.5 size-4" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium leading-tight">
                    Payment received
                  </span>
                  <span className="text-xs text-muted-foreground">
                    $59 credited to your account.
                  </span>
                </div>
              </span>

              <DropdownMenuSeparator />

              <span className="py-1 justify-center text-xs text-primary font-medium hover:bg-transparent flex items-center gap-2 cursor-pointer">
                View All Notifications <MoveRight size={18} strokeWidth={1} />
              </span>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 rounded-full cursor-pointer">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg text-xs">
                  CN
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={"bottom"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user.email}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
