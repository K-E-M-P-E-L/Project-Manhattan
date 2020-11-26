import React from 'react';


const Registrere = () => {
	return (
		<div className="registrere__main">
		<h1 className="registrere__header">Registrere Bruger</h1>
			<div className="registrere__venstreDel">
				<form action="">
					<div className="registrere__butiksnavn">
						<label htmlFor="butiksnavn">Navn</label>
						<input type="text" id="butiksnavn" placeholder="Navn" />
					</div>
				</form>
				<div className="clearboth" />

				<form action="">
					<div className="registrere__butiksnavn">
						<label htmlFor="butiksnavn">Password</label>
						<input type="text" id="butiksnavn" placeholder="Password" />
					</div>
				</form>
				<div className="clearboth" />

				<form action="">
					<div className="registrere__adresse">
						<label htmlFor="adresse">Adresse</label>
						<input type="text" id="adress" placeholder="Adresse" />
					</div>
				</form>

				<div className="clearboth" />

				<form action="">
					<div>
						<label htmlFor="tlf">Tlf.</label>
						<input type="text" id="tlf" placeholder="Tlf." />
					</div>
				</form>

				<form action="">
					<label htmlFor="email">Email</label>
					<input type="text" id="email" placeholder="Email" />
				</form>
			</div>

			<div className="registrere__hoejreDel">
				<div className="registrere__eksop">
					<label htmlFor="eksop">Age</label>
					<input name="eksop" id="eksop" placeholder="Age" />
				</div>
			</div>

			
			<div className="registrere__hoejreDel1">
				<div className="registrere__eksop1">
					<label htmlFor="eksop">Nationalitet</label>
					<input name="eksop" id="eksop1" placeholder="Nationalitet" />
				</div>
			</div>

			<div className="registrere__godkendBetingelser">
				<input type="checkbox" name="checkbox" id="checkbox"/>
				<p>Godkend <a href="."> betingelser</a> for at gå videre</p>
			</div>

			<input type="submit" id="send"/>
		</div>
	);
};

export default Registrere;
