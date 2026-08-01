import { Button } from "../ui/button";


export default function AuthNavigation() {
  return (
    <div className="flex-col flex lg:flex-row items-center w-full lg:w-auto gap-y-4 justify-center xl:gap-x-0">
            {/* Login  */}
            <Button  className="lg:hover:underline text-center w-full bg-transparent lg:bg-none rounded-none h-10 underline-offset-4 text-lg lg:text-xl border border-[#2F647D] lg:border-none py-2 cursor-pointer px-4 lg:p-0 lg:text-white text-[#2F647D] hover:bg-transparent lg:-ml-6 ml-0">
                <a href="/login">
                    Login
                </a>
            </Button>
            

            {/* Sign up  */}
            <Button variant="default" className=" w-full lg:w-auto lg:text-white text-center flex justify-center text-lg px-4 py-2 h-10 cursor-pointer bg-[#2F647D] hover:bg-[#2F647D] rounded-none">
              <a href="/sign-up">
                Sign Up
              </a>
            </Button>
          </div>
  )
}
