import React, { useEffect, useState } from "react";
import { getStories, Story } from '../api/Fetch';

export const Stories = () => {
    const [stories, setStories] = useState<Story[]>([]);
    useEffect(() => {
        const getStoriesAsync = async () => {
            try {
                const result = await getStories();
                setStories(result);
            } catch (e) {
                console.log(e);
            }
        };
        getStoriesAsync();
    }, []);
    
    return <ul>{stories.map((s: Story) => {
        return (<li>{s.title}</li>)
    })}</ul>;
}