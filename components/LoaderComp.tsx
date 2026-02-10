import {Loader} from "lucide-react";

const LoaderComp = () => {
    return (
        <div className="flex-center h-screen w-full" role="status" aria-live="polite">
            <Loader/>
        </div>
    )
}
export default LoaderComp
