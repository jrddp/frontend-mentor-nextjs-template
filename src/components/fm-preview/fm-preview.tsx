import { promises as fs } from "fs";
import path from "path";
import { FMPreviewClient } from "./fm-preview-client";

export async function FMPreview() {
    if (process.env.NODE_ENV !== 'development')
        return null;

    const dir = path.join(process.cwd(), 'public', 'design');
    console.log(dir);
    const files = await fs.readdir(dir);

    return <FMPreviewClient files={files} />
}
