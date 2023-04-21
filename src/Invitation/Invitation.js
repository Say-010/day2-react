
export default function Invitation(){
    return(
        <div>
<p> 
Subject : {props.subject}
<br/>
  To :{props.To}
  <br/>
  Hi , {props.name}
  <br/>
  I am having a next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them {props.person}
  <br/>
  My house is behind our school , {props.palace}
  <br/>
  I hope you will come and see you soon .
  <br/>
  from ,
  <br/>
  {props.by}

</p>

        </div>
    )

}