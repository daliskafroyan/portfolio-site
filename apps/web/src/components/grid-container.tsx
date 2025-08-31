import clsx from "clsx";

export default function GridContainer({
    children,
    className,
    direction = "full",
    lines = "both",
}: {
    children: React.ReactNode;
    className?: string;
    direction?: "full" | "to-left" | "to-right";
    lines?: "both" | "top" | "bottom" | "none";
}) {
    let topDirection = "";
    let bottomDirection = "";
    switch (direction) {
        case "full":
            topDirection = "before:-left-[100vw]";
            bottomDirection = "after:-left-[100vw]";
            break;
        case "to-left":
            topDirection = "before:right-0";
            bottomDirection = "after:right-0";
            break;
        case "to-right":
            topDirection = "before:left-0";
            bottomDirection = "after:left-0";
            break;
    }

    return (
        <div
            className={clsx(
                className,
                "relative",
                // Top line - show based on lines prop
                (lines === "both" || lines === "top") && [
                    "before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10",
                    topDirection,
                ],
                // Bottom line - show based on lines prop
                (lines === "both" || lines === "bottom") && [
                    "after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10",
                    bottomDirection,
                ],
            )}
        >
            {children}
        </div>
    );
}
