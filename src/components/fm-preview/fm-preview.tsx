import { promises as fs } from "fs";
import path from "path";
import { FMPreviewClient } from "./fm-preview-client";

export async function FMPreview() {
    const dir = path.join(process.cwd(), 'public', 'design');
    console.log(dir);
    const files = await fs.readdir(dir);

    return <FMPreviewClient files={files} />
}
