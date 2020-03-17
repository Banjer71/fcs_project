import React from 'react';
import Mailicon from '../../socialicons/contact_icon-1.png'
import {Container, MainArticle, CardSection, Card, PreFooter} from './PagesStyles'


const Home = () => {
	return (
        <>
		<Container>
			<MainArticle>
				<h1>FSC_Fabric Consulting Services</h1>
				<hr />
				<p>
					<strong>FCS</strong> Offers a specialized service in: Fabric research, dyeing and textile printing
					for Film, Television, Theatre and Fashion Industry.
				</p>
			</MainArticle>
			<MainArticle>
				<CardSection>
					<Card>
						<div className="icon">
							<i class="fa fa-repeat fa-2x" aria-hidden="true" />
						</div>
						<p>
							Offering a wide range of the latest swatches chosen from many Italian and European
							companies.
						</p>
					</Card>
					<Card>
						<div className="icon">
							<i class="fa fa-scissors fa-2x" aria-hidden="true" />
						</div>
						<p>
							Fabric research or materials necessary to the realization of the sketches as required by the
							designers or specialized atelier. From natural fibers to the latest generation of technical
							fabrics.
						</p>
					</Card>
					<Card>
						<div className="icon">
							<i class="fa fa-paint-brush fa-2x" aria-hidden="true" />
						</div>
						<p>
							Custom printing and dyeing of fabric chosen or already available. From screen printing to
							digital, from 2D to 3D, finishing, coatings and laser cutting.
						</p>
					</Card>
				</CardSection>
			</MainArticle> 
		</Container>
        <PreFooter>
            <Container>
                <div className='prefooter-text'>
                <h1>Fabric Consulting Services</h1>
                <h3>di Emanuela Naccarati</h3>
                <hr/>
                <p>The FCS, in collaboration with industry experts, will follow and advise the customer in all phases of work, customizing the product according to the stylistic demands of the designer. Streamlining and speeding the frantic movie times and optimizing all the stages of intermediation between supplier and customer but, above all, our speciality is finding the unfindable.</p>
                <p>Each project is individually priced, depending on the specific nature of work.</p>
                <p>Please contact us for general enquiries, prices and any other request you may have:</p>
                <img src={Mailicon} alt='mail icon' />
                <p>For Private Gallery's password request click here</p>
                </div>
                </Container>
            </PreFooter>
            </>
	);
};

export default Home;
