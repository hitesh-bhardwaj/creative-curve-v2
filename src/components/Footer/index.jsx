import Content from "./Content";

export default function Footer() {

    return (
        <>
            <footer 
                id="footer" 
                className="relative h-[49vw] bg-black"
                style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
            >
                <div className='fixed bottom-0 h-[50vw] w-full'>
                    <Content />
                </div>
            </footer>
        </>
    )
}