export const WrongIcon = ({color="currentColor", className=""}) =>{
    return (
        <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <rect fill="none" height="256" width="256"/><line stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="200" x2="56" y1="56" y2="200"/><line stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="200" x2="56" y1="200" y2="56"/>
        </svg>
    )
}

