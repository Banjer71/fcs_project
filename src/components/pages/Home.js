import React from 'react';
import styled from 'styled-components';
import Mailicon from '../../socialicons/contact_icon-1.png'

const Container = styled.div`
	padding: 0 .5rem;
	max-width: 1200px;
	margin: 0 auto;
`;

const MainArticle = styled.article`
	text-align: center;

	> h1,
	p {
		padding: 1.2rem 0;
	}

	> p {
		color: #313539;
	}

    > hr {
    max-width: 400px;
    background-color: #eaeaeb;
    border: 0;
    height: 1px;
    margin: 1rem auto;
`;

const CardSection = styled.div`
	margin: 0 auto;
	padding: 1rem;

    @media screen and (min-width: 680px) {
        display: flex;
    }
`;

const Card = styled.div`
    margin: 0 auto;
	padding: 1rem 0;
	max-width: 400px;

	> .icon {
		background-color: red;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		margin: 0 auto;
		background-color: #404040;
		position: relative;
	}

	> p {
		font-size: 0.9rem;
		color: #313539;
		line-height: 25px;
	}

	.fa {
		color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

const PreFooter = styled.div`
    margin: 0.8rem 0;
    background-color: #f6f6f7;
    text-align: center;

    h1 {
        margin: 0.5rem 0;
        padding: 1rem;
    }

    hr {
    max-width: 400px;
    background-color: #eaeaeb;
    border: 0;
    height: 1px;
    margin: 1rem auto;

    }
    .prefooter-text p {
        margin: 2rem 0;
		font-size: 0.9rem;
		color: #313539;
		line-height: 25px;
        padding: 0 1.4rem;
	}
`;

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
