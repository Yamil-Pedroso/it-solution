import { FaCloud, FaBrain, FaRegThumbsUp} from 'react-icons/fa'
import { SiSmartthings } from "react-icons/si";
import { RiTeamFill, RiTestTubeFill } from "react-icons/ri";
import { BiSolidCoinStack } from "react-icons/bi";

const sections =
    {
        title: {first: "How We Can", "second": "Help You"},
        column1: {
            heading: "IT Services",
            items: [
                {
                    num: "01",
                    name: "Dedicated Team",
                    icon: RiTeamFill,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    num: "02",
                    name: "QA and Testing",
                    icon: RiTestTubeFill,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    num: "03",
                    name: "SaaS",
                    icon: FaCloud,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        },
        column2: {
            heading: "IT Solutions",
            items: [
                {
                    num: "04",
                    name: "Blockchain",
                    icon: BiSolidCoinStack,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    num: "05",
                    name: "Artificial Intelligence",
                    icon: FaBrain,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    num: "06",
                    name: "Internet of Things",
                    icon: SiSmartthings,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        }
    }


export default sections
