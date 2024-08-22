export function loadScript(src: string): Promise<boolean> {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = "text/javascript"
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}