import { 
	Facebook, 
	Instagram, 
} from 'lucide-react'; 
import logo from "../../Logo.png";
import { Link } from "react-router-dom";

export function MinimalFooter() { 
	const year = new Date().getFullYear(); 
  
	const company = [ 
		{ 
			title: 'About Us', 
			href: '/about', 
		}, 
		{ 
			title: 'Services', 
			href: '/services', 
		}, 
		{ 
			title: 'Portfolio', 
			href: '/portfolio', 
		}, 
		{ 
			title: 'Contact Us', 
			href: '/contact', 
		}, 
		{ 
			title: 'FAQs', 
			href: '/faqs', 
		}, 
	]; 
  
	const resources = [ 
		{ 
			title: 'Blog', 
			href: '/blog', 
		}, 
		{ 
			title: 'SME Toolkit', 
			href: '#',
      onClick: () => {
        // Find the toolkit button in the page and click it
        const toolkitBtn = document.evaluate(
          "//button[contains(text(), 'Download Our Free SME Toolkit')]",
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;
        
        if (toolkitBtn instanceof HTMLElement) {
          toolkitBtn.click();
        }
      }
		}, 
	]; 
  
	const socialLinks = [ 
		{ 
			icon: <Instagram className="size-4" />, 
			link: 'https://www.instagram.com/bizexpress.ng/', 
		}, 
		{ 
			icon: <Facebook className="size-4" />, 
			link: 'https://web.facebook.com/people/BizExpress-NG/61573904937574/', 
		}, 
	]; 
	return ( 
		<footer className="relative mt-20"> 
			<div className="mx-auto w-[90%] sm:w-[80%] md:w-[85%] lg:w-[85%] px-6 sm:px-8 lg:px-12 md:border-x border-border/40"> 
				<div className="bg-border absolute inset-x-0 h-px w-full" /> 
				<div className="grid grid-cols-6 gap-6 py-8"> 
					<div className="col-span-6 flex flex-col gap-5 md:col-span-4"> 
						<Link to="/" className="w-max"> 
              <img src={logo} alt="BizExpress Logo" className="h-10 w-auto object-contain opacity-80" />
						</Link> 
						<p className="text-muted-foreground max-w-sm font-sans text-sm text-balance"> 
							BizExpress gives small business owners the tools, strategies, and visibility they need to stand out, attract customers, and scale with confidence.
						</p> 
						<div className="flex gap-2"> 
							{socialLinks.map((item, i) => ( 
								<a 
									key={i} 
									className="hover:bg-accent rounded-md border p-1.5 transition-colors" 
									target="_blank" 
									href={item.link} 
								> 
									{item.icon} 
								</a> 
							))} 
						</div> 
					</div> 
					<div className="col-span-3 w-full md:col-span-1"> 
						<span className="text-muted-foreground mb-1 text-xs font-semibold uppercase tracking-wider"> 
							Resources 
						</span> 
						<div className="flex flex-col gap-1 mt-2"> 
							{resources.map(({ href, title, onClick }, i) => ( 
								<a 
									key={i} 
									className="w-max py-1 text-sm duration-200 hover:text-primary hover:underline cursor-pointer" 
									href={href}
                  onClick={(e) => {
                    if (onClick) {
                      e.preventDefault();
                      onClick();
                    }
                  }}
								> 
									{title} 
								</a> 
							))} 
						</div> 
					</div> 
					<div className="col-span-3 w-full md:col-span-1"> 
						<span className="text-muted-foreground mb-1 text-xs font-semibold uppercase tracking-wider">Company</span> 
						<div className="flex flex-col gap-1 mt-2"> 
							{company.map(({ href, title }, i) => ( 
								<Link 
									key={i} 
									className="w-max py-1 text-sm duration-200 hover:text-primary hover:underline" 
									to={href} 
								> 
									{title} 
								</Link> 
							))} 
						</div> 
					</div> 
				</div> 
				<div className="bg-border absolute inset-x-0 h-px w-full" /> 
				<div className="flex flex-col justify-between gap-2 pt-8 pb-8"> 
					<p className="text-muted-foreground text-center font-light text-sm"> 
						© {year} <Link to="/" className="hover:text-primary transition-colors">BizExpress</Link>. All rights reserved.
					</p> 
				</div> 
			</div> 
		</footer> 
	); 
 } 
