"use client";

import { Blend, Columns2 } from "lucide-react";
import { useState, useEffect } from "react";

export function FMPreviewClient({ files }: { files: string[] }) {
    const [selectedFile, setSelectedFile] = useState("");
    const [opacity, setOpacity] = useState(1);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [maskWidth, setMaskWidth] = useState(50);

    useEffect(() => {
        if (selectedFile) {
            const img = new Image();
            img.onload = () => {
                setDimensions({
                    width: img.naturalWidth,
                    height: img.naturalHeight
                });
            };
            img.src = `/design/${selectedFile}`;
        }
    }, [selectedFile]);

    if (files.length === 0)
        return <div className="fixed bottom-0 left-0 z-50 p-4 font-light">Add design files to /public/design to preview.</div>;

    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 flex flex-col gap-2 p-4 font-light">
                {selectedFile && (
                    <>
                        <div className="flex items-center gap-1" >
                            <Columns2 className="size-5" />
                            <input className="w-full"
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                value={maskWidth}
                                onChange={(e) => setMaskWidth(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="flex items-center gap-1">
                            <Blend className="size-5" />
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={opacity}
                                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                            />
                        </div>
                    </>
                )}
                <select className="bg-transparent"
                    value={selectedFile}
                    onChange={(e) => setSelectedFile(e.target.value)}
                >
                    <option value="">Select preview file</option>
                    {files.map((file, index) => (
                        <option key={index} value={file}>{file}</option>
                    ))}
                </select>
            </div>
            {selectedFile && (
                <div className="absolute flex items-center justify-center size-full pointer-events-none overflow-clip z-40">
                    <div className="relative">
                        <img
                            src={`/design/${selectedFile}`}
                            style={{
                                opacity: opacity,
                                maxWidth: dimensions.width,
                                maxHeight: dimensions.height,
                                clipPath: `polygon(${maskWidth}% 0, 100% 0, 100% 100%, ${maskWidth}% 100%)`
                            }}
                            alt="Design Preview"
                        />
                    </div>
                </div>
            )}


        </>
    )
}
