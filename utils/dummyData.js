import RideLogo from '../public/ride.png'
import FoodLogo from '../public/food.png'

export const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: RideLogo,
        screen: "MapScreen"
    },
    {
        id: '456',
        title: 'Order Food',
        image: FoodLogo,
        screen: "EatScreen"
    }
]

export const navFavData = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye, London, UK"
    }
]

export const rideOptionsData = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: ""
    },
    {
        id: "Uber-XL-456",
        title: "UberXL",
        multiplier: 1.2,
        image: ""
    },
    {
        id: "Uber-LUX-789",
        title: "UberLUX",
        multiplier: 1.75,
        image: ""
    }
]