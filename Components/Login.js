import Button from "@material-tailwind/react/Button"
import { signIn } from "next-auth/client"


function Login(){
    return(
        <div className='flex flex-col items-center justify min-h-screen py-2'>
            <img
              loading="lazy"
              className=""
              src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
            />
        <Button
            className='w-44 mt-10'
            color='blue'
            buttonType='filled'
            ripple='light'
            onClick={signIn}
        >Login</Button>

        </div>
    )
}

export default Login


// // <img class="gb_tc gb_6d" src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" 
// srcset="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png 2x " alt="" aria-hidden="true" style="width:40px;height:40px">