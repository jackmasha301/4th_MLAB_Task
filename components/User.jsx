import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Users = () => {
    const verifyAge = (age) => {

        if (age > 18){

            return age;
        }
        else{

            return age;
        }

    }

     State { 
       namesList: [
            {
                Surname: 'Masha',
                Name:'Jack',
                age:24,
                id:1,
            },
            {
                Surname: 'Matlou',
                Name:'Berlina',
                age:20,
                id:2,
            },
            {
                Surname: 'Magakwe',
                Name:'Matjie',
                age:19,
                id:3,
            } ,
			{
                Surname: 'Monoge',
                Name:'Daniel',
                age:19,
                id:4,
            } ,
            
            
        ]

     };

    state.nameList.sort((a,b) => parseInt(a.age) - parseInt(b.age));

    const UserDetails = state.nameList.map((user,id) => {
        return (
            <div  key={id}>
                <p className={'content-item'}>
                    {user.name}  {user.surname} {ConfirmAge(user.age)}
                </p>

            </div>

        )
    }
    )

    return s
        <div className={'container'}>

            <h2 className={'h2'}> List Of Users </h2>
            <div className={'row'}>
                {userDetails}
            </div>
        </div>

    );

}
export default users
