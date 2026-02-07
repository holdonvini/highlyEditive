import {
  AnimationOutlineIcon,
  ClosedCaptionsTagIcon,
  FolderWithFilesIcon,
  GalleryThumbnailIcon,
  PanelSeparateWindowIcon,
  ShutterSpeedIcon,
  TouchLongIcon,
} from "@/core/icons";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative">
      <div className="relative py-16 md:py-24">
        <div className="flex flex-col gap-7 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 relative z-4 pt-5">
            <div className="flex flex-col gap-2 max-w-[55ch] lg:sticky lg:top-[calc(var(--header-height)+1rem)] lg:self-start max-lg:text-center">
              {/* <p className="text-xl lg:text-2xl tracking-wider italic font-serif">
                What We Do
              </p> */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Need More?
                <span className="font-serif font-medium italic ml-[5px]">
                  Add It.
                </span>
              </h2>
            </div>
            <div className="py-5 flex flex-col gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="relative border border-foreground/5 p-1 rounded-[20px]"
                >
                  <div className="relative z-10 flex w-full flex-col gap-2 justify-between overflow-hidden rounded-2xl border border-transparent bg-card px-6 py-5 shadow-sm shadow-sky-950/15 ring-1 ring-foreground/10 h-full">
                    <div className="relative w-fit h-fit mb-4 bg-linear-to-b from-brand to-brand-light rounded-xl p-2 shadow-md flex items-center justify-center">
                      <item.icon className="text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-medium tracking-wide text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 text-[14px] lg:text-[15.5px] font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    id: "item-1",
    title: "Animations & Motion Graphics",
    description:
      "Included in $80 rush tier. Available for other packages when needed. Contact for details.",
    icon: AnimationOutlineIcon,
  },
  {
    id: "item-2",
    title: "Custom Thumbnails",
    description:
      "Professional designs for YouTube. Multiple options provided. Contact for specifics.",
    icon: GalleryThumbnailIcon,
  },
  {
    id: "item-3",
    title: "Translated Captions",
    description:
      "Multiple language options. Properly timed and synced. Available for all packages.",
    icon: ClosedCaptionsTagIcon,
  },
  {
    id: "item-4",
    title: "Project Source Files",
    description:
      "Need the editable files? Available on request. Contact for details.",
    icon: FolderWithFilesIcon,
  },
  {
    id: "item-5",
    title: "Rush Individual Videos",
    description:
      "In monthly plans, expedite specific videos when deadlines shift. Contact when needed.",
    icon: ShutterSpeedIcon,
  },
  {
    id: "item-6",
    title: "Longer Videos",
    description:
      "Videos over 90 seconds? Absolutely doable. Contact with length for custom pricing.",
    icon: TouchLongIcon,
  },
  {
    id: "item-7",
    title: "Something Specific?",
    description:
      "WhatsApp or email. Team responds within hours with everything you need.",
    icon: PanelSeparateWindowIcon,
  },
];
