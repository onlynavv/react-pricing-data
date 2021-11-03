import React from 'react'
import './index.css'
import {FaTimes} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'

function App() {

  const pricings = [
    {
      id: 1,
      plan:'free',
      price: 0,
      duration: 'month',
      available: 
        {
          users: 'Single User',
          storage: '5GB Storage',
          publicProjects: 'Unlimited Public Projects',
          access: 'Community Access'
        },
      unavailable:
        {
          privateProjects: 'Unlimited Private Projects',
          phone: 'Dedicated Phone Support',
          subdomain: 'Free Subdomain',
          status: 'Monthly Status Reports'
        }
    },
    {
      id: 2,
      plan:'plus',
      price: 9,
      duration: 'month',
      available: 
        {
          users: '5 Users',
          storage: '50GB Storage',
          publicProjects: 'Unlimited Public Projects',
          access: 'Community Access',
          privateProjects: 'Unlimited Private Projects',
          phone: 'Dedicated Phone Support',
          subdomain: 'Free Subdomain',
        },
      unavailable:
        {
          status: 'Monthly Status Reports'
        }
    },
    {
      id: 3,
      plan:'pro',
      price: 49,
      duration: 'month',
      available:
        {
          users: 'Unlimited Users',
          storage: '150GB Storage',
          publicProjects: 'Unlimited Public Projects',
          access: 'Community Access',
          privateProjects: 'Unlimited Private Projects',
          phone: 'Dedicated Phone Support',
          subdomain: 'Unlimited Free Subdomains',
          status: 'Monthly Status Reports'
        },
      unavailable:
        {
          
        }
    }
  ]

  return (
    <div className="App">
      <div className="container">
        {/* price table component getting rendered for the total number of item present in the json*/}
        {pricings.map((item)=>{
        const {plan,price,duration,available,unavailable} = item
        return <PriceTable plan={plan} price={price} duration={duration} available={available} unavailable={unavailable} />
      })}
      </div>
    </div>
  );
}

// Price Table component

// based on the value passed the PriceTable component will render its value, the values are sent as props
// the props which are all passed are object data types, so while receiving itself we are destructuring the object in the 
// parameter

const PriceTable = ({plan,price,duration,available,unavailable}) => {
  // sometimes, in json some value may miss, if we continue to render them will throw error/some blank spaces may seen in the view
  // to avoid those here we are rendering only the available features for the respective plans

  // here we are getting keys from the available and unavailable arrays
  // so for each objects/plans we will sepearte the available and non-available features
  // so only for the available keys the map method will render
  const availableValues = Object.keys(available)
  const unavailableValues = Object.keys(unavailable)
  return(
    <>
      <div className="price-table-container">
        <div className="price-heading">
          <p>{plan}</p>
          <h1 className="price-tag">${price}<span className="duration">/{duration}</span></h1>
        </div>
        <div className="price-body">
          {/* here we are rendering the data for the respective plans belongs to available category and not available category*/}
          {/* features available will be in dark color tone and if the feature is not available for that plan will be displayed in lower color tone */}
          <ul>
            {availableValues.map((item)=>{

              // displaying the list only for the available values
              // here for free, plus, pro plans the available features vary, to avoid blank spaces or error we are displaying only to the
              // feature which is available for that plan
              return (<li><FaCheck />
                {available[`${item}`]}
              </li>)
            })}
          </ul>
          <ul className="not-available">
            {unavailableValues.map((item)=>{
              return (<li><FaTimes />
                {unavailable[`${item}`]}
              </li>)
            })}
          </ul>
          <button className="price-button">Button</button>
        </div>
      </div>
    </>
  )
}

export default App;
