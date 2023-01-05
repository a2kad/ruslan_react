import React from 'react';
class Users extends React.Component {
	users = [
		{
			id:1,
			nom: 'RESHETNIKOV',
			prenom: 'Ruslan',
			bio: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea maxime qui omnis repellat eaque perferendis dolorum at ut modi blanditiis inventore explicabo delectus itaque ad, laborum quae, repellendus harum.',
			age: 40,
			happy: true
		},
		{
			id:2,
			nom: 'IVANOV',
			prenom: 'Ivan',
			bio: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea maxime qui omnis repellat eaque perferendis dolorum at ut modi blanditiis inventore explicabo delectus itaque ad, laborum quae, repellendus harum.',
			age: 45,
			happy: false
		}
	]
	
	render (){
		if (this.users.length >  0)
			return(
				<div>
					{this.users.map((el) => (
						<div className='user' key={el.id}>
							<h3>{el.prenom} {el.nom}</h3>
							<p>{el.bio}</p>
							<b>{el.happy ? 'Happy' : 'Not Happy'}</b>
						</div>
						))}
				</div>
			)
		else
		return(
			<div className='user'>
				<h3>Not found</h3>
			</div>
		)
	}
}

export default Users