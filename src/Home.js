import React, { useEffect, useState } from 'react'
import './Home.css'
import Web3 from 'web3'
import abi from './abi.json';


// import rectangle from './assets/rectangle.png'
import twitter from './assets/twitter.svg'
import discord from './assets/discord.svg'
import floor from './assets/welcome-floor.png'
import svgLine from './assets/line.svg'
import opensea from './assets/open-sea.png'
import card from './assets/card.png'
import card1 from './assets/card-2.png'
import card2 from './assets/card-3.png'
import card3 from './assets/card-4.png'
import card4 from './assets/card-5.png'
import roadmap from './assets/roadmap.svg'
import roadmap1 from './assets/roadmap1.svg'
import roadmap2 from './assets/roadmap2.svg'
import roadmap3 from './assets/roadmap3.svg'
import roadmap4 from './assets/roadmap4.svg'
import roadmap5 from './assets/roadmap5.svg'
import roadmap6 from './assets/roadmap6.svg'
import roadmap7 from './assets/roadmap7.svg'
import roadmap8 from './assets/roadmap8.svg'
import sait from './assets/sait.png'
import team2 from './assets/team-domantas.png'
import team3 from './assets/team-umar.png'
import team4 from './assets/team-dahr.png'
import twitterwhite from './assets/twitter-white.svg'
import discordwhite from './assets/discord-white.svg'
import logo from './assets/make-logo.png'
import arrow from './assets/arrowdown.svg'

require("dotenv").config();

const { REACT_APP_CONTRACT_ADDRESS,REACT_APP_OPEN_SEA} = process.env;




const Home = () => {
    const [quantity, setQuantity] = useState(1);
    const [availableFloor, setAvailableFloor]=useState(7777);
    const [priceInEth, setPriceInEth] = useState(0.06);
    const [contract, setContract]=useState();
    const [accountBalance, setAccountBalance]=useState(0)
    const [mintStatus,setMintStatus]=useState(false)

    useEffect(()=>{
        loadWeb3();
    },[mintStatus])

    async function loadWeb3() {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          const web3 = window.web3;
          // creating contract instance
          const metamsakAccount=await web3.eth.getAccounts();
          if(metamsakAccount.length>0){
              let balance=await web3.eth.getBalance(metamsakAccount[0]);
              balance=web3.utils.fromWei(balance, "ether");
              balance=Number(balance).toFixed(8)
              setAccountBalance(balance);
          }
          const contractaddress = REACT_APP_CONTRACT_ADDRESS;
          const ct = new web3.eth.Contract(abi, contractaddress);
          setContract(ct)
          const maxSupply=await ct.methods._TOTALSUPPLY().call()
          let totalSupply=await ct.methods.totalSupply().call();
          setAvailableFloor(maxSupply-totalSupply)
          const price=await ct.methods.getPrice(1).call();
          setPriceInEth(web3.utils.fromWei(price, "ether"));
        } else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
        } else {
          window.alert(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
          );
        }
      }

      async function mint(){
          const web3=window.web3
          await window.ethereum.enable();
          let userAddress=await web3.eth.getAccounts();
          if(userAddress.length>0){
            let balance=await web3.eth.getBalance(userAddress[0]);
            balance=web3.utils.fromWei(balance, "ether");
            balance=Number(balance).toFixed(8)
            setAccountBalance(balance);
        }
          const price=await contract.methods.getPrice(1).call();
          const _value=price*quantity
          await contract.methods.mint(quantity).send({from:userAddress[0],value:_value})
          setMintStatus(!mintStatus)
      }

    return (
        <>  
            <div className="container">

                <section className="hero">

                        <div className="hero-content img-fluid">
                            <br />
                            <h1 className="hero-title">
                                 GET THE FLOOR AT THE FLOOR!
                            </h1>
                                
                            <h2 className="hero-subtitle">
                                THE FIRST-EVER NFT CONDOMINIUM PROJECT!
                            </h2>
                            <p className="hero-text py-3">A unique hand drawn collection of 7777 fun NFT properties.</p>
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                                <a href="">
                                    <img src={twitter} alt="twitter" />
                                </a>
                                <a href="">
                                    <img src={discord} alt="discord" />
                                </a>
                                <a href="">
                                    <img src={twitter} alt="twitter" />
                                </a>
                            </div>
                            <img src={arrow} alt="arrow"  className="mt-4"/>
                        </div>

                </section>
                <section className="container mt-5">
                    <svg className="svgtxt" viewBox="0 0 450 50">
                    <text y="55">Welcome to the Floor </text>
                    </svg>
                     <h1 className="">Welcome to the Floor </h1>
                    {/* <span className="float-right mr-5 ">
                    <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                    <path d="M0 25.4035C14.0957 20.1869 20.9189 15.6545 31.4523 4.83856C35.0814 12.0968 4.83882 29.0327 0 25.4035Z" fill="white"/>
                    <path d="M17.8832 37.7672C20.3068 22.9338 19.7346 14.7624 15.5302 0.262092C23.6339 0.690141 23.4283 35.3513 17.8832 37.7672Z" fill="white"/>
                    </g>
                    </svg>
                    </span> */}
                </section>
                {/* welcomer flor section */}
                <section className="container mt-5 welcome-floor">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <p>THE FLOOR is a collection of 7777 Unique Hand-Drawn NFTs Floors in one very strange but fun condominium. Each NFT is randomly generated from over 100+ digital assets created by the renown cartoonist and comic artist DAHR .</p>
                            <div className="d-flex align-items-center mt-5 ">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                            <path d="M27.4337 13.8205C27.2928 13.9521 27.8427 13.741 17.6658 16.9664C17.4272 17.0419 17.9337 17.1562 7.76452 13.9333C7.76384 13.9333 7.76316 13.9326 7.76247 13.9326C7.44549 13.8334 7.31895 13.4704 7.40837 13.2462C7.40837 13.1375 7.33283 13.2891 17.0676 0.71177C17.2877 0.429444 17.7129 0.429376 17.9331 0.71177C27.7428 13.3863 27.5923 13.1337 27.5923 13.2462C27.6636 13.4242 27.5845 13.7047 27.4337 13.8205Z" fill="white"/>
                            <path d="M17.0812 35.3043L7.51082 23.8724C7.16088 23.4543 7.57569 22.8353 8.09536 23.0001L17.5005 25.9809L26.9057 23.0001C27.4252 22.8353 27.8403 23.4543 27.4902 23.8724L17.9198 35.3043C17.7013 35.5655 17.2995 35.565 17.0812 35.3043Z" fill="white"/>
                            <path d="M27.2362 21.7098C16.969 24.9638 17.6272 24.7682 17.5004 24.7682C17.3675 24.7682 17.9963 24.9525 7.76457 21.7098C7.25734 21.5479 7.25768 20.8285 7.76457 20.6666L10.35 19.8472C10.4716 19.8087 10.0506 19.7 17.3349 22.0086C17.4386 22.0414 17.5562 22.0432 17.6658 22.0086L24.4854 19.8472C24.602 19.8102 24.425 19.7757 27.2361 20.6666C27.7435 20.8286 27.7431 21.5479 27.2362 21.7098Z" fill="white"/>
                            <path d="M27.2362 17.8257C16.969 21.0797 17.6272 20.8841 17.5004 20.8841C17.3675 20.8841 17.9963 21.0684 7.76457 17.8257C7.25734 17.6637 7.25768 16.9443 7.76457 16.7825C10.5699 15.8934 10.3973 15.9257 10.5159 15.9633C17.8434 18.2857 17.3735 18.1497 17.5004 18.1497C17.627 18.1497 17.1548 18.2865 24.4849 15.9633C24.602 15.9261 24.4268 15.8921 27.2362 16.7825C27.7435 16.9445 27.7431 17.6639 27.2362 17.8257Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="35" height="35" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <p className="ml-4 py-3 border-top  border-white">Fair minting price and distribution of all floors &nbsp;&nbsp;&nbsp;&nbsp; </p>
                            </div>
                            <div className="d-flex align-items-center">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                            <path d="M10.2087 15.429L0.440312 22.3627C-0.0783383 22.7308 -0.138464 23.4758 0.308856 23.923L7.8395 31.4537L11.7276 25.6215C12.0417 25.1505 12.678 25.0233 13.1489 25.3372C13.6198 25.6512 13.7471 26.2875 13.4332 26.7584L9.31756 32.9317L11.5857 35.1999C12.0459 35.6601 12.8141 35.5798 13.1692 35.0344L19.7337 24.9539L10.2087 15.429Z" fill="white"/>
                            <path d="M34.6904 0.800183C34.2902 0.399939 33.6412 0.399939 33.241 0.800183L19.805 14.2362C17.4847 12.4052 14.1956 12.386 11.8535 14.1754L20.9468 23.2687C22.6292 21.0667 22.714 18.0277 21.1965 15.7434L34.6904 2.24955C35.0906 1.8493 35.0906 1.20043 34.6904 0.800183Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="35" height="35" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <p className="ml-4 py-3 border-top border-white">Constant Floor Sweeps to secure the investment</p>
                            </div>
                            <div className="d-flex align-items-center ">
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                            <path d="M26.0661 6.93236L19.8176 0.683867C19.7045 0.570371 19.5481 0.5 19.375 0.5H6.25002C4.87184 0.5 3.75 1.62119 3.75 3.00002V28C3.75 29.3788 4.87184 30.5 6.25002 30.5H23.75C25.1282 30.5 26.25 29.3788 26.25 28V7.37498C26.25 7.20189 26.1796 7.04551 26.0661 6.93236ZM8.12502 6.75002H15.625C15.9705 6.75002 16.25 7.02957 16.25 7.37504C16.25 7.72051 15.9705 8.00006 15.625 8.00006H8.12502C7.77955 8.00006 7.5 7.72051 7.5 7.37504C7.5 7.02957 7.77955 6.75002 8.12502 6.75002ZM17.3132 24.0706C14.5923 26.75 13.9587 26.75 13.75 26.75C12.9737 26.75 12.6953 25.8589 12.4072 24.9043C11.9714 25.7887 11.4697 26.75 10.625 26.75C10.1904 26.75 9.67037 26.4638 9.18088 26.028C8.94773 26.2599 8.71576 26.4631 8.49973 26.6249C8.3874 26.7092 8.25557 26.75 8.12496 26.75C7.93576 26.75 7.74773 26.6639 7.62445 26.4997C7.41814 26.2239 7.47428 25.832 7.7502 25.6251C7.94795 25.4762 8.14939 25.2968 8.34715 25.099C7.85033 24.4136 7.5 23.6323 7.5 23C7.5 21.5736 8.63771 20.5 9.375 20.5C10.1001 20.5 11.25 21.009 11.25 22.375C11.25 23.1709 10.697 24.2005 10.0085 25.0898C10.2636 25.3279 10.4956 25.4859 10.6311 25.5C10.769 25.4029 11.1486 24.6302 11.3317 24.2591C11.7053 23.501 11.9518 22.9999 12.5 22.9999C13.1409 22.9999 13.3398 23.6646 13.5938 24.5063C13.6682 24.7559 13.7915 25.1673 13.9001 25.4132C14.3591 25.1032 15.5176 24.0839 16.4368 23.1794C16.6833 22.9382 17.0788 22.9395 17.3205 23.1867C17.5622 23.4327 17.5598 23.8282 17.3132 24.0706ZM21.875 19.25H13.125C12.7795 19.25 12.5 18.9704 12.5 18.625C12.5 18.2795 12.7795 18 13.125 18H21.875C22.2204 18 22.5 18.2795 22.5 18.625C22.5 18.9704 22.2204 19.25 21.875 19.25ZM21.875 15.5H8.12502C7.77955 15.5 7.5 15.2204 7.5 14.875C7.5 14.5295 7.77955 14.25 8.12502 14.25H21.875C22.2205 14.25 22.5001 14.5295 22.5001 14.875C22.5 15.2204 22.2204 15.5 21.875 15.5ZM21.875 11.75H8.12502C7.77955 11.75 7.5 11.4704 7.5 11.125C7.5 10.7795 7.77955 10.5 8.12502 10.5H21.875C22.2205 10.5 22.5001 10.7795 22.5001 11.125C22.5 11.4704 22.2204 11.75 21.875 11.75ZM21.25 6.75002C20.5603 6.75002 20 6.1891 20 5.50004V2.63381L24.1163 6.75002H21.25Z" fill="white"/>
                            <path d="M9.37502 21.75C9.3091 21.7915 8.75 22.2377 8.75 23C8.75 23.3198 8.93064 23.7214 9.18459 24.1084C9.66313 23.4462 10 22.7736 10 22.375C10 21.7799 9.47879 21.75 9.37502 21.75Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="30" height="30" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <p className="ml-4 py-3 border-top border-bottom border-white">Constant Floor Sweeps to secure the investment</p>
                            </div>
                            <p className="pt-5">Owning the Floor on the Ethereum blockchain grants access to members-only community, and opens a great NFT property investing opportunity.Additional perks are unlocked by the Floor community through a roadmap milestones activation.</p>
                        </div>
                        <div className="col-md-2 col-sm-12"></div>
                        <div className="col-md-4 col-sm-12">
                            <img src={floor} alt="Welcome Floor" className="img-fluid" />
                            <div className="fixwidth mt-4 ml-4">
                                <p className="">Enter the future Floor metaverse at the floor Price! Caricature collection of unique artistic NFTs.</p>
                                <br />
                                <img src={svgLine} alt="svg-line" className="img-fluid" /> 
                            </div> 
                        </div>
                    </div>
                </section>

                {/* welcome-floor section */}
                <section className="buy-floor mt-5 px-4 py-5">
                    <div className="div-clip row justify-content-around align-items-center">
                        <div className="col-md-4">
                            <h1 className="">BUY YOR OWN FLOOR</h1>
                        </div>
                        <div className="col-md-4">
                            <svg width="301"  className="img-fluid" height="15" viewBox="0 0 301 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M300.707 8.19002C301.098 7.79949 301.098 7.16633 300.707 6.7758L294.343 0.411842C293.953 0.021318 293.319 0.021318 292.929 0.411842C292.538 0.802367 292.538 1.43553 292.929 1.82606L298.586 7.48291L292.929 13.1398C292.538 13.5303 292.538 14.1635 292.929 14.554C293.319 14.9445 293.953 14.9445 294.343 14.554L300.707 8.19002ZM0 8.48291H300V6.48291H0V8.48291Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="col-md-4">
                            <a href="https://testnets.opensea.io/collection/the-floors-v2" target="_blank" className="btn buy-btn btn-lg rounded-0">
                                Buy On <img src={opensea} alt="opensea" />
                            </a>
                        </div>
                    </div>
                </section>
                <br />
                <br />

                <section className="container mt-5 nft-form">
                    <svg className="svgtxt" viewBox="0 0 450 50">
                    <text y="55">Get the unique Property</text>
                    </svg>
                     <h1 className="">Get the unique Property <br></br> on Etherium Bockchain</h1>
                     <p className="pt-4">
                     Fair distribution of the Floors is the key for the project success. Every wallet can mint a maximum of 10 Floors right until all 7677 Floors will be purchased. The remaining 100 Floors will be used for airdrops, giveaways and creator invitations into our closed condominium community.
                     </p>
                    {/* <span className="float-right mr-5 ">
                    <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                    <path d="M0 25.4035C14.0957 20.1869 20.9189 15.6545 31.4523 4.83856C35.0814 12.0968 4.83882 29.0327 0 25.4035Z" fill="white"/>
                    <path d="M17.8832 37.7672C20.3068 22.9338 19.7346 14.7624 15.5302 0.262092C23.6339 0.690141 23.4283 35.3513 17.8832 37.7672Z" fill="white"/>
                    </g>
                    </svg>
                    </span> */}
                </section>
                {/* buy nft section */}

                <section className="container mt-5 welcome-floor">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 border-left px-5">
                            <p>Here are some stats and the information about the collection:</p>
                            <div className="d-flex align-items-center justify-content-between mt-5 fixmobile">
                            <p>Initial Minting price</p>
                            <p className="ml-4 py-3">{priceInEth}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between   fixmobile">
                            <p>
                             No Bonding Curve
                            </p>
                            <p className="ml-4 py-3"> Floors for All!</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between  fixmobile">
                            <p> Total collectibles</p>
                            <p className="ml-4 py-3 ">7777</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between   fixmobile">
                            <p> Total Floors Available to mint</p>
                            <p className="ml-4 py-3">{availableFloor}</p>
                            </div>
                            <p className="pt-5">Read more about perks of owning the Floor below!</p>
                        </div>
                        <div className="col-md-2 col-sm-12"></div>
                        <div className="col-md-4 col-sm-12 bg-nft py-5 mt-2">
                            <h3 className="text-center my-4">10, 000 Nfts</h3>
                            <div className="d-flex align-items-center justify-content-between mt-2 border-bottom">
                            <p>Eth balance</p>
                            <p className="ml-4 py-3">{accountBalance} ETH</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between py-2 border-bottom">
                            <p>Amount</p>
                            <div>
                                <span className="minus" style={{cursor:"pointer"}} onClick={()=>{if(quantity>1){setQuantity(quantity-1)}}}>-  </span>
                                {quantity}
                                <span className="plus" style={{cursor:"pointer"}} onClick={()=>{if(quantity<10){setQuantity(quantity+1)}}}>  +</span>
                            </div>
                            <a href="https://testnets.opensea.io/collection/the-floors-v2" target="_blank" className="btn btn-small btn-red rounded-0">
                                Buy On
                            </a>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-2 border-bottom">
                            <p>Total balance</p>
                            <p className="ml-4 py-3">{quantity*priceInEth}</p>
                            </div>
                            <div className="d-flex justify-content-center ">
                                <a onClick={()=>{mint()}} className="btn buy-btn-white rounded-0 mt-3 w-100">
                                    Buy now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* cards section heading  */}
                <br />
                <br />
                <hr />
                <br />

                <section className="container mt-5">
                    <svg className="svgtxt" viewBox="0 0 450 50">
                    <text y="55" x="38%">Welcome to luxury</text>
                    </svg>
                     <h1 className="text-center">Welcome to luxury <br /> condominium </h1>
                    {/* <span className="float-right mr-5 ">
                    <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                    <path d="M0 25.4035C14.0957 20.1869 20.9189 15.6545 31.4523 4.83856C35.0814 12.0968 4.83882 29.0327 0 25.4035Z" fill="white"/>
                    <path d="M17.8832 37.7672C20.3068 22.9338 19.7346 14.7624 15.5302 0.262092C23.6339 0.690141 23.4283 35.3513 17.8832 37.7672Z" fill="white"/>
                    </g>
                    </svg>
                    </span> */}
                </section>
                {/* cards section */}
                <div className="row justify-content-around mt-5">
                    <div className="col-sm-6 col-md-3 col-lg-2 mt-4">
                        <div className="card bg-transparent border-0"><img className="card-img-top" alt="" src={card} /></div>
                        <div ><p className="text-center">7777 FLOORS are programmatically generated by a random combination of 100+ traits. These traits make each FLOOR unique and identifiable.</p></div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 mt-4">
                        <div className="card bg-transparent border-0"><img className="card-img-top" alt="" src={card1} /></div>
                        <div ><p className="text-center">Fair price for all Floors! No bonding curve get it and see your investment skyrocket.</p></div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 mt-4">
                        <div className="card bg-transparent border-0"><img className="card-img-top" alt="" src={card2} /></div>
                        <div ><p className="text-center">Investors Chest. 1.5% of secondary sales commissions will be redistributed among all Floor Holders. The more you own the more you get.</p></div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 mt-4">
                        <div className="card bg-transparent border-0"><img className="img-fluid" src={card3} alt="" /></div>
                        <div ><p className="text-center">Floor Cleaning Service. Part of the profits will be used to swipe the floor-priced NFT’s to redistribute them among the holders.</p></div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 mt-4 fix">
                        <div className="card bg-transparent border-0"><img className="card-img-top" src={card4} alt=""/></div>
                        <div ><p className="text-center">Fun perks, NFT & ETH airdrops and the Collection Upgrade with Roadmap activation.</p></div>
                    </div>
                </div>  
            </div>

                    {/* roadmap section */}

               <div className="roadmap py-5">
                   <div className="container">
                   <section className="container my-5">
                        <svg className="svgtxt" viewBox="0 0 450 50">
                            <text y="55" x="39%">PROJECT ROADMAP</text>
                            </svg>
                        <h1 className="text-center mb-5">PROJECT ROADMAP</h1>
                    </section>
                    <section className="row my-5 justify-content-center align-items-center">
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src={roadmap} alt="Roadmap" className="img-fluid" />
                        </div>
                        <div className="col-md-7 mt-2">
                            <div className="d-flex align-items-center">
                                <img src={roadmap1} alt="10%" />
                                <div className="border-green ml-4 p-3 w-100">
                                    <p className="">Discord Nitro boost & Rarity Tools</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img src={roadmap2} alt="20%" />
                                <div className="border ml-4 p-2 w-100">
                                    <p>Giveaway of 10 Rare (top 10% rarity) FLOORs to the holders / nftexp.io listing initiated</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img src={roadmap3} alt="40%" />
                                <div className="border ml-4 p-2 w-100">
                                    <p>Sold - The first Floor Sweep initiated buying out up to 15 Floors for the cleaning and re-listing (raising the floor price of the whole collection)</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img src={roadmap4} alt="50%" />
                                <div className="border ml-4 p-2 w-100">
                                    <p>15 random floors will get a 1 ETH “Mail Coupon” to their wallet</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img src={roadmap5} alt="60%" />
                                <div className="border ml-4 p-2 w-100">
                                    <p>Giveaway of 7 Rare (top 7% rarity) FLOORs to the holders of 3 or more floors</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img src={roadmap6} alt="70%" />
                                <div className="border ml-4 p-2 w-100">
                                    <p>Merch store is launched with VIP limited merch for FLoor Holders. x100 random floor holders will get a 3D Colelctable Statue of the Floor.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img src={roadmap7} alt="80%" />
                                <div className="border ml-4 p-2 w-100">
                                    <p>The second Floor Sweep initiated with the funds from the CONDO MONEY POOL </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img src={roadmap8} alt="100%" />
                                <div className="border ml-4 p-2 w-100">
                                    <p>Sold - Every Floor holder will get one of 3 Keys airdropped allowing to upgrade his Floor to a Unique Villa </p>
                                </div>
                            </div>
                        
                        </div>
                    </section>
                   </div>
                </div>

                {/* roadmap for mobile only */}
                {/* <div className="roadmap py-5">
                   <div className="container">
                    <section className="row my-5  align-items-center">
                        <div className="col-6">
                                    <img src={roadmap} alt="" />
                        </div>
                        <div className="col-6">
                                          <div className="accordion-item first-accordion py-2">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button >
                                                    <img className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" src={roadmap1} alt="" />
                                                </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                <div className="accordion-body">
                                                    <p>Discord Nitro boost & Rarity Tools</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item first-accordion py-2">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <img src={roadmap1} alt="" />
                                                </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                <div className="accordion-body">
                                                    <p>Discord Nitro boost & Rarity Tools</p>
                                                </div>
                                                </div>
                                            </div>
                        </div>
                    </section>
                   </div>
                </div> */}

                {/* container restarts */}
                <div className="container">
                    <section className="container my-5 fix">
                             <svg className="svgtxt" viewBox="0 0 450 50">
                            <text y="55" x="36%">The Floor Management </text>
                            </svg>
                        <h1 className="text-center mb-5">The Floor Management <br /> Society</h1>
                    </section>

                    <div className="row align-items-center my-5">
                        <div className="col-md-4">
                            <img src={svgLine} alt="svg-line" className="img-fluid" /> 
                            <br />
                            <br />
                            <p>
                            All collection news will be announced promptly through our Twitter and Discord communities. Special avents, giveaways and airdrops will be done constantly to praise the Floor holders. Some key decisions about the collection future will be taken by a community vote that every current verified Floor holder can take part in.
                            </p>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src={sait} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-4">
                            <p>
                            The Floor owners stick together. Even if you decide to sell your floor or to flip some of the precious blocks for profits our heart & the community will always be with you!
                            You will still be able to enjoy some of the community benefits, however voting and airdrops will be done only for the actual Floor holders.
                            </p>
                            <br />
                            <br />
                            <img src={svgLine} alt="svg-line" className="img-fluid" /> 
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr />


                    {/* FAQ SECTION */}
                    <section className="container py-5">
                            <svg className="svgtxt" viewBox="0 0 450 50">
                            <text y="55" x="48%">FAQ</text>
                            </svg>
                        <h1 className="text-center mb-5">FAQ</h1>
                    </section>

                        <div className="row justify-content-center py-5 inter">
                            <div className="col-md-8">
                                        {/* <div class="accordion" id="accordionPanelsStayOpenExample"> */}
                                            <div className="accordion-item first-accordion py-2">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                Here will be the title of the question 1
                                                </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is a "fish" text often used in print and web design. Lorem Ipsum is the standard "fish" for texts in the Latin alphabet since the beginning of the XVI century. At the time, an unnamed printer created a large collection of font sizes and shapes, using Lorem Ipsum to print samples.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                            <div className="accordion-item second-accordion py-2">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                Here will be the title of the question 2
                                                </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is a "fish" text often used in print and web design. Lorem Ipsum is the standard "fish" for texts in the Latin alphabet since the beginning of the XVI century. At the time, an unnamed printer created a large collection of font sizes and shapes, using Lorem Ipsum to print samples.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                            <div className="accordion-item third-accordion py-2">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                Here will be the title of the question 2
                                                </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is a "fish" text often used in print and web design. Lorem Ipsum is the standard "fish" for texts in the Latin alphabet since the beginning of the XVI century. At the time, an unnamed printer created a large collection of font sizes and shapes, using Lorem Ipsum to print samples.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                            <div className="accordion-item forth-accordion py-2">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingfour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false" aria-controls="panelsStayOpen-collapsefour">
                                                Here will be the title of the question 2
                                                </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapsefour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfour">
                                                <div className="accordion-body">
                                                    <p>Lorem Ipsum is a "fish" text often used in print and web design. Lorem Ipsum is the standard "fish" for texts in the Latin alphabet since the beginning of the XVI century. At the time, an unnamed printer created a large collection of font sizes and shapes, using Lorem Ipsum to print samples.</p>
                                                </div>
                                                </div>
                                            </div>
                                            
                                        {/* </div> */}
                            </div>
                        </div>
                        <br />
                        <br />
                        <hr />
                        {/* team section */}
                    <section className="container py-5">
                    <svg className="svgtxt" viewBox="0 0 450 50">
                            <text y="55" x="44%">our team</text>
                            </svg>
                        <h1 className="text-center mb-5">our team </h1>
                    </section>
                    {/* team cards */}
                        <div className="row justify-content-around mt-5">
                                <div className="col-sm-6 col-md-3 mt-4">
                                    <div className="card bg-transparent border-0"><img className="card-img-top" src={team3} alt=""/></div>
                                    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
                                        <h1 className="text-center">
                                        laffro
                                        </h1>
                                        <img src={twitterwhite} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mt-4">
                                    <div className="card bg-transparent border-0"><img className="card-img-top" src={team2} alt=""/></div>
                                    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
                                        <h1 className="text-center">
                                        domantas
                                        </h1>
                                        <img src={discordwhite} alt="" />

                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mt-4">
                                    <div className="card bg-transparent border-0"><img className="card-img-top" src={team3} alt=""/></div>
                                    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
                                       <h1 className="text-center">
                                        Umar
                                        </h1>
                                        <img src={twitterwhite} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mt-4">
                                    <div className="card bg-transparent border-0"><img className="img-fluid" src={team4} alt=""/></div>
                                    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
                                         <h1 className="text-center">
                                         dahr
                                        </h1>
                                        <img src={discordwhite} alt="" className="img-fluid" width="120" height="120"/>
                                    </div>
                                </div>
                          </div>
                            <br />
                            <br />
                        <div className="logo-footer d-flex justify-content-center">
                            <img src={logo} alt="" />
                        </div>
                </div>

                 {/* footer */}
                 <footer className="container-fluid" >
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                     <div className="row align-items-center justify-content-between hidephone ">
                            <div className="col-md-4 col-xm-3">
                                <p>Copyright</p>
                            </div>
                            <div className="col-md-4 col-xm-12 d-flex align-items-center justify-content-between inputfix">
                                <input className="py-3" type="text" placeholder="Email Address" />
                                <span className="footerbtn">
                                   
                                   &rarr; 
                                    
                                </span>
                            </div>
                            <div className="col-md-4 col-xm-6 d-flex justify-content-end">
                                <p>Contacts</p>
                            </div>
                     </div>
                     <div className="row align-items-center justify-content-between d-lg-none d-md-none ">
                             <div className="col-md-4 col-xm-12 d-flex align-items-center justify-content-between inputfix">
                                <input className="py-3" type="text" placeholder="Email Address" />
                                <span className="footerbtn">
                                   
                                   &rarr; 
                                    
                                </span>
                            </div>
                            <div className="col-md-4 col-xm-6 d-flex justify-content-around mt-5">
                                <p>Copyright</p>
                                <p>Contacts</p>
                                
                            </div>
                            
                            <div className="col-md-4 col-xm-6 d-flex justify-content-end">
                            </div>
                     </div>
                     <br />
                    <br />
                    <br />
                    
                 </footer>

                 

            
        </>
    )
}

export default Home
