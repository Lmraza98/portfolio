"use client"
type HamburgerProps = {
	open: boolean,
	setOpen(open:boolean): void,
}
export const Hamburger:React.FC<HamburgerProps> = ({ setOpen, open }) => {
  const handleClick = () => {
    console.log("TESTING");
    setOpen(!open);
  }
  return (
    <div
      onClick={handleClick}
      className="relative flex flex-col justify-between group w-10 h-6 items-end cursor-pointer"
    >
      <div className="relative h-6 w-8">	
        <span
          className={`absolute top-0 left-0 w-8 h-1 bg-black rounded transition-all duration-300 ${ open ? "rotate-45 top-2.5" :"" }`}
        />
        <span
          className={`absolute top-2.5 left-0 w-8 h-1 bg-black rounded transition-all duration-300 ${ open ? "opacity-0": "opacity-100"}`}
        />
        <span
                	className={`absolute bottom-0 left-0 w-8 h-1 bg-black rounded transition-all duration-300 ${ open ? "-rotate-45 bottom-2.5" :"" }`}
        />
      </div>
    </div> 
		
  )

}
