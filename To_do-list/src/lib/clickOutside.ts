export function clickOutSide(node:any, callback: any){
    function handleClick(event: any){
        if(node && !node.contains(event.target) && !event.defaultPrevented){
            callback()
        }
    }

    document.addEventListener('click', handleClick, true)

    return{
        destroy(){
            document.removeEventListener('click', handleClick, true)
        }
    }
}