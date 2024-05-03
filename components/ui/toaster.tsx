"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, icon, ...props }) {
        return (
          <Toast key={id} {...props} className="bg-popover justify-start gap-x-2 items-start">
            {icon}
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="text-popover-foreground">
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className="text-popover-foreground/90">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-popover-foreground/50 hover:text-popover-foreground" />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
