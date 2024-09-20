import React from "react";

export interface SectionInfo {
    ref: React.RefObject<HTMLDivElement>;
    component: React.FC;
    name: string;
};