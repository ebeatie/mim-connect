import { participant } from "@/data/participant";

export default function Greeting() {

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if(hour <12){

        greeting = "Good Morning";

    }else if(hour<18){

        greeting = "Good Afternoon";

    }

    return(

        <div>

            <h2 className="text-4xl font-bold">

                {greeting},

                {participant.firstName}!

            </h2>

            <p className="text-slate-600 mt-2">

                Welcome to Music in the Mountains

            </p>

        </div>

    )

}