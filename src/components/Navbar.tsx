
import React from "react";
import { Search, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <svg
                className="h-8 w-auto text-airbnb-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0002 1.25C9.96145 1.25 8.29692 2.50499 7.44913 4.24941C6.48364 4.51835 5.66687 5.15869 5.15772 6.04403C4.64857 6.92938 4.48881 7.98427 4.70776 8.99266C4.92671 10.0011 5.50963 10.8842 6.3382 11.4641C7.16677 12.044 8.18169 12.278 9.18781 12.1223C9.53409 12.0669 9.86801 12.001 10.1883 11.9258C10.3962 12.3565 10.6328 12.7743 10.8968 13.1749C9.81383 13.9551 9.00024 15.114 8.60279 16.4473C8.20534 17.7807 8.2483 19.2125 8.72424 20.5175C9.20017 21.8224 10.0783 22.9249 11.2186 23.6613C12.359 24.3978 13.6979 24.7254 15.0351 24.5909C16.3722 24.4564 17.6204 23.8674 18.5937 22.9134C19.567 21.9594 20.2073 20.6998 20.4095 19.3383C20.6117 17.9768 20.3633 16.5851 19.7046 15.3862C19.0459 14.1874 18.0146 13.2534 16.7684 12.717C15.5222 12.1807 14.1351 12.0725 12.8207 12.4089C12.5067 11.9708 12.2264 11.5119 11.9827 11.0369C12.0275 11.0407 12.0724 11.0419 12.1174 11.0419C12.8564 11.0419 13.5833 10.8453 14.2315 10.4729C14.8796 10.1005 15.4266 9.56494 15.8185 8.91941C16.2103 8.27387 16.4344 7.54063 16.466 6.78501C16.4976 6.0294 16.3356 5.28225 15.9951 4.60447C15.6546 3.9267 15.1466 3.34438 14.5196 2.91478C13.8926 2.48518 13.1672 2.22384 12.4145 2.15587C11.6618 2.08791 10.9062 2.21558 10.2141 2.52783C9.52188 2.84008 8.91532 3.32507 8.44878 3.93807C7.98223 4.55108 7.67092 5.27165 7.5445 6.03911C7.41807 6.80657 7.47993 7.59433 7.72426 8.32814C7.96859 9.06195 8.38769 9.71675 8.9433 10.2338C8.68364 10.3171 8.42022 10.3842 8.15457 10.4345C7.48348 10.5372 6.79397 10.4372 6.17513 10.1452C5.55628 9.85317 5.0349 9.38116 4.68063 8.79598C4.32636 8.2108 4.15383 7.53973 4.18738 6.86268C4.22093 6.18564 4.45903 5.53413 4.86789 4.9873C5.50709 3.05473 6.96869 1.49956 9.00024 1.25C9.63124 0.450001 10.723 0 12.0002 0C13.2774 0 14.3692 0.45 15.0002 1.25C17.0317 1.49956 18.4933 3.05473 19.1325 4.9873C19.5414 5.53413 19.7795 6.18564 19.813 6.86268C19.8466 7.53973 19.674 8.2108 19.3198 8.79598C18.9655 9.38116 18.4441 9.85317 17.8253 10.1452C17.2064 10.4372 16.5169 10.5372 15.8458 10.4345C15.2952 10.354 14.756 10.2018 14.2447 9.98257C14.6254 9.35202 14.8262 8.62545 14.8212 7.88367C14.8162 7.1419 14.6055 6.4188 14.2167 5.79446C13.8279 5.17011 13.2776 4.66848 12.6246 4.34517C11.9717 4.02185 11.2428 3.88951 10.5224 3.96356C9.80192 4.03761 9.11893 4.31499 8.55731 4.76583C7.9957 5.21667 7.5808 5.82253 7.36892 6.51043C7.15703 7.19833 7.15872 7.93533 7.37376 8.62217C7.58879 9.30901 8.00651 9.91275 8.57022 10.3607C9.13394 10.8087 9.81825 11.0826 10.5391 11.1531C11.1962 11.2185 11.8582 11.1034 12.4564 10.8196C12.1109 11.3472 11.8107 11.9037 11.5599 12.4819C11.4003 12.4593 11.2394 12.4419 11.0771 12.4298C9.78411 12.3339 8.49551 12.7793 7.50378 13.68C6.51205 14.5806 5.88924 15.8702 5.77728 17.2583C5.66531 18.6465 6.07293 20.0285 6.90946 21.1075C7.74598 22.1865 8.94826 22.8784 10.2734 23.0377C11.5986 23.1971 12.9391 22.8122 14.0029 21.9599C15.0668 21.1077 15.7731 19.8504 15.9684 18.4688C16.1638 17.0871 15.835 15.683 15.0512 14.5295C14.2673 13.376 13.0882 12.5554 11.764 12.2503C12.1001 11.6831 12.3865 11.0887 12.6202 10.4743C13.1835 10.7051 13.7887 10.8486 14.4046 10.8979C15.388 11.0108 16.3797 10.7818 17.2312 10.2451C18.0826 9.70844 18.7464 8.89074 19.1188 7.91194C19.4911 6.93314 19.5502 5.84458 19.2867 4.82116C19.0232 3.79775 18.4521 2.89248 17.6582 2.24552C17.1012 1.38139 16.1232 0 12.0002 0C11.0112 0 10.0932 0.5 9.50024 0.75L9.75024 1C10.0952 0.75 10.5002 0.75 12.0002 0.75C13.2502 0.75 14.0002 1.25 15.0002 1.25H12.0002Z" />
              </svg>
              <span className="ml-2 text-airbnb-primary font-bold text-2xl hidden sm:inline">
                dreamy
              </span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center justify-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm hover:shadow transition-shadow">
                <button className="pl-4 pr-2 py-2 text-sm font-medium">Anywhere</button>
                <span className="border-l border-gray-300 h-5"></span>
                <button className="px-2 py-2 text-sm font-medium">Any week</button>
                <span className="border-l border-gray-300 h-5"></span>
                <button className="pr-2 py-2 text-sm font-medium text-gray-600">Add guests</button>
                <Button size="sm" variant="default" className="rounded-full bg-airbnb-primary hover:bg-airbnb-primary/90 text-white p-2 m-1">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center">
            <a href="#" className="hidden sm:block text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100">
              Airbnb your home
            </a>
            <a href="#" className="hidden sm:flex items-center justify-center p-2 rounded-full hover:bg-gray-100 mx-2">
              <Globe className="h-5 w-5" />
            </a>
            <div className="flex items-center border border-gray-300 rounded-full p-1 hover:shadow-md transition-shadow">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Search */}
        {isMobile && (
          <div className="mt-4 pb-2 md:hidden">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm p-2">
              <Search className="h-5 w-5 ml-2 text-gray-500" />
              <input
                type="text"
                placeholder="Where to?"
                className="flex-1 bg-transparent border-0 focus:ring-0 text-sm ml-2"
              />
              <Button size="sm" variant="ghost" className="rounded-full p-1">
                <span className="sr-only">Filters</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 5.25H12.25M3.75 8.25H12.25M3.75 11.25H12.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
