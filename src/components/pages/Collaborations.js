import React from 'react';
import styled from 'styled-components';
import { Container } from './PagesStyles';
import Catch22 from '../images/catch22.jpg';
import AllTM from '../images/allthemoney.jpg';
import Zoolander2 from '../images/zoolander_2.jpg';
import Confratello from '../images/casadel_confratello.jpg';
import Card from './Card';

const Content = styled.div`
	width: 100%;
`;

const SubContainer = styled(Container)`
    max-width: 100%;
    margin: 1rem 0;
    padding: 1rem 0;
    background-color: #f6f6f7;
    > h2 {
        text-align: center;
    }
`;

const Collaboration = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-gap: 10px;
	gap: 10px;

	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const Collaborations = () => {
	return (
		<Content>
			<SubContainer>
				<h2>Collaborations</h2>
			</SubContainer>
			<Container>
				<Collaboration>
					<Card
						image={Catch22}
						name="Emanuela Naccarati"
						company="Fabric Consultant Costume P.A."
						fromCollab={true}
						textTitle='All The Money'
						textDesign='Costume Design'
						textName='Janity Jates'
						objective='FCS Obiettivo:'
						text='Ricerca Fornitori'
						text2='Ricerca, Campionatura e lavorazione per: tessuti, maglieria, jeans, pelle e accessori'
					/>
					<Card
						image={AllTM}
						name="Emanuela Naccarati"
						company="Fabric Consultant Costume P.A."
						fromCollab={true}
						textTitle='All The Money'
						textDesign='Costume Design'
						textName='Janity Jates'
						objective='FCS Obiettivo:'
						text='Ricerca Fornitori'
						text2='Ricerca, Campionatura e lavorazione per: tessuti, maglieria, jeans, pelle e accessori'
						 
					/>
					<Card
						image={Zoolander2}
						name="Emanuela Naccarati"
						company="Fabric Consultant Costume P.A."
						fromCollab={true}
						textTitle='Zoolander'
						textDesign=''
						textName='Leesa Evans'
						objective='FCS Obiettivo:'
						text='Ricerca Fornitori'
						text2='Ricerca, Campionatura e lavorazione per: tessuti, maglieria, jeans, pelle e accessori'
					/>
					<Card
						image={Confratello}
						name="Emanuela Naccarati"
						company="Fabric Consultant Costume P.A."
						fromCollab={true}
						textTitle='Casa del Confratello'
						text='Casa del confratello: Art Director Emanuela Naccarati Fornitori'
						text2={`Ricerca fornitori, tessuti e materiali degli abiti e degli accessori dell'azienda`}
					/>
				</Collaboration>
			</Container>
		</Content>
	);
};

export default Collaborations;
