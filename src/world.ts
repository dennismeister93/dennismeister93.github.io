const world = '🗺️';

export function helloWorld (word: string = world): string {
    console.log(`Hello ${world}!`);
    return `Hello ${world}!`;
}

helloWorld();