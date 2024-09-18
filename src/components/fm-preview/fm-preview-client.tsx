"use client";

import { useState, useEffect } from "react";

export function FMPreviewClient({ files }: { files: string[] }) {
    const [selectedFile, setSelectedFile] = useState(files[0]);
    const [opacity, setOpacity] = useState(1);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
        return <div className="absolute font-light bottom-2 left-2">Add design files to /design to preview.</div>;

    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 flex flex-col gap-2 p-4 font-light">
                {selectedFile && (
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={opacity}
                        onChange={(e) => setOpacity(parseFloat(e.target.value))}
                    />
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
                <div className="fixed inset-0 flex items-center justify-center">
                    <img
                        src={`/design/${selectedFile}`}
                        style={{
                            opacity: opacity,
                            maxWidth: dimensions.width,
                            maxHeight: dimensions.height
                        }}
                        alt="Design Preview"
                    />
                </div>
            )}
        </>
    )
}
