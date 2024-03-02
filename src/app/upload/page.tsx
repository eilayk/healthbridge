"use client";
import { Button } from "@/components/ui/button";

export default function Page () {
    const onUploadClick = () => {
        console.log('works');
    }

    return (
        <Button onClick={onUploadClick}>upload</Button>
    );
}