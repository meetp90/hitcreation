import React from 'react'

export default function Features() { 
    return (
        <section className="features">
            <div className="features__title">
                <div className='features__title--header'>Your dream clothes </div>
                <div className='features__title--footer'>are one call away from you</div>
            </div>
            <div className="features__container">
                <div className="features__col">
                    <div className="features__col--logo">
                        <ion-icon name="call-outline"></ion-icon>
                    </div>
                    <div >
                    <a href="tel:+919920382464">
                        <h3 className="features__col--title">  Call Designer </h3>
                        <p className="features__col--desc">
                            Click to place your order / Call on 99203 82464
                        </p>
                        </a>
                    </div>
                </div>
                <div className="features__col">
                    <div className="features__col--logo">
                        <ion-icon name="home-outline"></ion-icon>
                    </div>
                    <div >
                        <h3 className="features__col--title">Tailor Visit</h3>
                        <p className="features__col--desc">
                            Our Tailor will visit your home to take measurement as per requirements
                        </p>
                    </div>
                </div>
                <div className="features__col">
                    <div className="features__col--logo">
                        <ion-icon name="checkmark-outline"></ion-icon>
                    </div>
                    <div >
                        <h3 className="features__col--title">Delivery</h3>
                        <p className="features__col--desc">
                            Your Stiched dresses will be delivered to your home
                        </p>
                    </div>
                </div>
            </div >
        </section >
    )
}
