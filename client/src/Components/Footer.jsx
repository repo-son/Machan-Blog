import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from "react-icons/bs";

export default function FooterCom() {
  return (
  <Footer container className="border border-t-8 border-teal-500">
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid w-full justify-between sm:flex md:grid-cols-1">
        <div className="mt-5">
          <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-yellow-500 via-green-400 to-blue-400 rounded-lg text-white'>Machan</span>
           Blog
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
          <Footer.Title title="ABOUT" />
          <Footer.LinkGroup col>
            <Footer.Link
            href=""
            target="blank"
            rel="noopener noreferrer"
            >
              About my blog
            </Footer.Link>
            <Footer.Link
            href="/about"
            target="blank"
            rel="noopener noreferrer"
            >
              My Projects
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
          <div>
          <Footer.Title title="FOLLOW US" />
          <Footer.LinkGroup col>
            <Footer.Link
            href="https://www.github.com/repo-son"
            target="blank"
            rel="noopener noreferrer"
            >
              Github
            </Footer.Link>
            <Footer.Link
            href=""
            target="blank"
            rel="noopener noreferrer"
            >
              Discord
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
          <div>
          <Footer.Title title="LEGAL" />
          <Footer.LinkGroup col>
            <Footer.Link
            href="#"
            target="blank"
            rel="noopener noreferrer"
            >
              Privacy Policy
            </Footer.Link>
            <Footer.Link
            href="#"
            target="blank"
            rel="noopener noreferrer"
            >
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
          </div>
        </div>
        <Footer.Divider/>
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Machan Blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook}/>
              <Footer.Icon href="#" icon={BsInstagram}/>
              <Footer.Icon href="#" icon={BsTwitter}/>
              <Footer.Icon href="https://github.com/repo-son" icon={BsGithub}/>
              <Footer.Icon href="#" icon={BsDribbble}/>
            </div>
          </div>
        </div>
  </Footer>
 );
}
