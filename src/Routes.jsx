import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const Footer = React.lazy(() => import("pages/Footer"));
const LadOne = React.lazy(() => import("pages/LadOne"));
const LandThree = React.lazy(() => import("pages/LandThree"));
const PlaceitnetbyhtmltodesignFREEversion21022023One = React.lazy(() =>
  import("pages/PlaceitnetbyhtmltodesignFREEversion21022023One")
);
const LandOne = React.lazy(() => import("pages/LandOne"));
const Land = React.lazy(() => import("pages/Land"));
const GetdoordashcombyhtmltodesignFREEversion0103 = React.lazy(() =>
  import("pages/GetdoordashcombyhtmltodesignFREEversion0103")
);
const PlaceitnetbyhtmltodesignFREEversion21022023 = React.lazy(() =>
  import("pages/PlaceitnetbyhtmltodesignFREEversion21022023")
);
const WwwzolacombyhtmltodesignFREEversion01032023 = React.lazy(() =>
  import("pages/WwwzolacombyhtmltodesignFREEversion01032023")
);
const Opt = React.lazy(() => import("pages/Opt"));
const WwwbokklubbennobyhtmltodesignFREEversion04Three = React.lazy(() =>
  import("pages/WwwbokklubbennobyhtmltodesignFREEversion04Three")
);
const TheporndudecombyhtmltodesignFREEversion0303Two = React.lazy(() =>
  import("pages/TheporndudecombyhtmltodesignFREEversion0303Two")
);
const Option = React.lazy(() => import("pages/Option"));
const WwwnetflixcombyhtmltodesignFREEversion0203Two = React.lazy(() =>
  import("pages/WwwnetflixcombyhtmltodesignFREEversion0203Two")
);
const FaphousecombyhtmltodesignFREEversion03032023 = React.lazy(() =>
  import("pages/FaphousecombyhtmltodesignFREEversion03032023")
);
const Two = React.lazy(() => import("pages/Two"));
const Lando = React.lazy(() => import("pages/Lando"));
const Edited = React.lazy(() => import("pages/Edited"));
const DivOne = React.lazy(() => import("pages/DivOne"));
const Divpage = React.lazy(() => import("pages/Divpage"));
const FolkeinvestnobyhtmltodesignFREEversion1802Twenty = React.lazy(() =>
  import("pages/FolkeinvestnobyhtmltodesignFREEversion1802Twenty")
);
const Pr = React.lazy(() => import("pages/Pr"));
const Httpslatinaspycomstories = React.lazy(() =>
  import("pages/Httpslatinaspycomstories")
);
const Reditedraw = React.lazy(() => import("pages/Reditedraw"));
const WwwgrundervekstnobyhtmltodesignFREEversion18 = React.lazy(() =>
  import("pages/WwwgrundervekstnobyhtmltodesignFREEversion18")
);
const Raw = React.lazy(() => import("pages/Raw"));
const WwwslottsfjellnobyhtmltodesignFREEversion18Zero = React.lazy(() =>
  import("pages/WwwslottsfjellnobyhtmltodesignFREEversion18Zero")
);
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const Homepage2Dark = React.lazy(() => import("pages/Homepage2Dark"));
const Div = React.lazy(() => import("pages/Div"));
const WwwslottsfjellnobyhtmltodesignFREEversion18ZeroOne = React.lazy(() =>
  import("pages/WwwslottsfjellnobyhtmltodesignFREEversion18ZeroOne")
);
const WwwnetflixcombyhtmltodesignFREEversion1802Two = React.lazy(() =>
  import("pages/WwwnetflixcombyhtmltodesignFREEversion1802Two")
);
const WwwslottsfjellnobyhtmltodesignFREEversion18ZeroTwo = React.lazy(() =>
  import("pages/WwwslottsfjellnobyhtmltodesignFREEversion18ZeroTwo")
);
const NotionformsiobyhtmltodesignFREEversion1902Twenty = React.lazy(() =>
  import("pages/NotionformsiobyhtmltodesignFREEversion1902Twenty")
);
const WwwmsncombyhtmltodesignFREEversion19022023 = React.lazy(() =>
  import("pages/WwwmsncombyhtmltodesignFREEversion19022023")
);
const Htmltode = React.lazy(() => import("pages/Htmltode"));
const Top10netflixcombyhtmltodesignFREEversion18Two = React.lazy(() =>
  import("pages/Top10netflixcombyhtmltodesignFREEversion18Two")
);
const MessageOne = React.lazy(() => import("pages/MessageOne"));
const MyProfileWallet = React.lazy(() => import("pages/MyProfileWallet"));
const MyProfilePreview = React.lazy(() => import("pages/MyProfilePreview"));
const Message = React.lazy(() => import("pages/Message"));
const Saved = React.lazy(() => import("pages/Saved"));
const OtherUserProfile = React.lazy(() => import("pages/OtherUserProfile"));
const MyProfileHistory = React.lazy(() => import("pages/MyProfileHistory"));
const MarketDetail = React.lazy(() => import("pages/MarketDetail"));
const MyProfileCollection = React.lazy(() =>
  import("pages/MyProfileCollection")
);
const SettingsOne = React.lazy(() => import("pages/SettingsOne"));
const DashboardTwo = React.lazy(() => import("pages/DashboardTwo"));
const Market = React.lazy(() => import("pages/Market"));
const ActiveBid = React.lazy(() => import("pages/ActiveBid"));
const CreatorOnclick = React.lazy(() => import("pages/CreatorOnclick"));
const Ownerpreview = React.lazy(() => import("pages/Ownerpreview"));
const CompanyDetail = React.lazy(() => import("pages/CompanyDetail"));
const LandingAlt = React.lazy(() => import("pages/LandingAlt"));
const Settings = React.lazy(() => import("pages/Settings"));
const Aktivitet = React.lazy(() => import("pages/Aktivitet"));
const History = React.lazy(() => import("pages/History"));
const Onlywebsite = React.lazy(() => import("pages/Onlywebsite"));
const Cart = React.lazy(() => import("pages/Cart"));
const CategorieswithSidebar = React.lazy(() =>
  import("pages/CategorieswithSidebar")
);
const ProductDetails = React.lazy(() => import("pages/ProductDetails"));
const HomepageVThree = React.lazy(() => import("pages/HomepageVThree"));
const Completed = React.lazy(() => import("pages/Completed"));
const ProductList = React.lazy(() => import("pages/ProductList"));
const HomepageVTwo = React.lazy(() => import("pages/HomepageVTwo"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const SinglePhoto = React.lazy(() => import("pages/SinglePhoto"));
const GroupMessage = React.lazy(() => import("pages/GroupMessage"));
const SingleEvent = React.lazy(() => import("pages/SingleEvent"));
const SinglePost = React.lazy(() => import("pages/SinglePost"));
const Messages = React.lazy(() => import("pages/Messages"));
const Stories = React.lazy(() => import("pages/Stories"));
const MyProfile = React.lazy(() => import("pages/MyProfile"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const SingleVideo = React.lazy(() => import("pages/SingleVideo"));
const Events = React.lazy(() => import("pages/Events"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const SingleStory = React.lazy(() => import("pages/SingleStory"));
const VideoFullScreen = React.lazy(() => import("pages/VideoFullScreen"));
const PasswordRecovery = React.lazy(() => import("pages/PasswordRecovery"));
const MyFriends = React.lazy(() => import("pages/MyFriends"));
const SettingsTwo = React.lazy(() => import("pages/SettingsTwo"));
const DirectMessage = React.lazy(() => import("pages/DirectMessage"));
const VideoChat = React.lazy(() => import("pages/VideoChat"));
const Signup = React.lazy(() => import("pages/Signup"));
const Home1 = React.lazy(() => import("pages/Home1"));
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const SearchResults = React.lazy(() => import("pages/SearchResults"));
const UserProfile = React.lazy(() => import("pages/UserProfile"));
const SinglePhotoOne = React.lazy(() => import("pages/SinglePhotoOne"));
const AucaAudioBookDashboard = React.lazy(() =>
  import("pages/AucaAudioBookDashboard")
);
const Dashboard2 = React.lazy(() => import("pages/Dashboard2"));
const VideoAnalysis = React.lazy(() => import("pages/VideoAnalysis"));
const NOFONFTMarketplaceDashboard = React.lazy(() =>
  import("pages/NOFONFTMarketplaceDashboard")
);
const Dekstop = React.lazy(() => import("pages/Dekstop"));
const Dashboardchat = React.lazy(() => import("pages/Dashboardchat"));
const UltimateCourseDashboard = React.lazy(() =>
  import("pages/UltimateCourseDashboard")
);
const PropertyDashboard = React.lazy(() => import("pages/PropertyDashboard"));
const EventDashboard = React.lazy(() => import("pages/EventDashboard"));
const DekstopOne = React.lazy(() => import("pages/DekstopOne"));
const OnlineCourseSearchpage = React.lazy(() =>
  import("pages/OnlineCourseSearchpage")
);
const FoodPlanDashboard = React.lazy(() => import("pages/FoodPlanDashboard"));
const DekstopTwo = React.lazy(() => import("pages/DekstopTwo"));
const SewuJobJobFinderDashboard = React.lazy(() =>
  import("pages/SewuJobJobFinderDashboard")
);
const MacBookProTwo = React.lazy(() => import("pages/MacBookProTwo"));
const JobfinderOne = React.lazy(() => import("pages/JobfinderOne"));
const DashboardDarkmodeOne = React.lazy(() =>
  import("pages/DashboardDarkmodeOne")
);
const JobFinder = React.lazy(() => import("pages/JobFinder"));
const SpendingListTable = React.lazy(() => import("pages/SpendingListTable"));
const SocialNetworkCampaignList = React.lazy(() =>
  import("pages/SocialNetworkCampaignList")
);
const AdsCampaignList = React.lazy(() => import("pages/AdsCampaignList"));
const Dashboard1 = React.lazy(() => import("pages/Dashboard1"));
const FormAddNewCampaign = React.lazy(() => import("pages/FormAddNewCampaign"));
const Analytics = React.lazy(() => import("pages/Analytics"));
const One = React.lazy(() => import("pages/One"));
const CityTemp = React.lazy(() => import("pages/CityTemp"));
const CityTempOne = React.lazy(() => import("pages/CityTempOne"));
const HomeDark = React.lazy(() => import("pages/HomeDark"));
const IPadminiTen = React.lazy(() => import("pages/IPadminiTen"));
const IPadminiEleven = React.lazy(() => import("pages/IPadminiEleven"));
const IPadminiEight = React.lazy(() => import("pages/IPadminiEight"));
const FinnHotel = React.lazy(() => import("pages/FinnHotel"));
const FraMmallsBuy = React.lazy(() => import("pages/FraMmallsBuy"));
const MusicPlay = React.lazy(() => import("pages/MusicPlay"));
const Charts = React.lazy(() => import("pages/Charts"));
const Playlist = React.lazy(() => import("pages/Playlist"));
const Browse = React.lazy(() => import("pages/Browse"));
const Discover = React.lazy(() => import("pages/Discover"));
const LeieInn = React.lazy(() => import("pages/LeieInn"));
const HomepageVOne = React.lazy(() => import("pages/HomepageVOne"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const RealEstate = React.lazy(() => import("pages/RealEstate"));
const DashboardThree = React.lazy(() => import("pages/DashboardThree"));
const OnlineTaxiDashboard = React.lazy(() =>
  import("pages/OnlineTaxiDashboard")
);
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const NFTDark = React.lazy(() => import("pages/NFTDark"));
const PropertyOne = React.lazy(() => import("pages/PropertyOne"));
const OverviewOne = React.lazy(() => import("pages/OverviewOne"));
const RealEstateDashboard = React.lazy(() =>
  import("pages/RealEstateDashboard")
);
const Weather = React.lazy(() => import("pages/Weather"));
const Overview = React.lazy(() => import("pages/Overview"));
const DashboardDarkmode = React.lazy(() => import("pages/DashboardDarkmode"));
const TaskDashboard = React.lazy(() => import("pages/TaskDashboard"));
const Property = React.lazy(() => import("pages/Property"));
const AdminDashboard = React.lazy(() => import("pages/AdminDashboard"));
const LiveSaleswhatnot = React.lazy(() => import("pages/LiveSaleswhatnot"));
const RealEstateOne = React.lazy(() => import("pages/RealEstateOne"));
const JobFinderTwo = React.lazy(() => import("pages/JobFinderTwo"));
const DarkSettings = React.lazy(() => import("pages/DarkSettings"));
const DarkBookmark = React.lazy(() => import("pages/DarkBookmark"));
const Orderskanbanweb = React.lazy(() => import("pages/Orderskanbanweb"));
const Ordersweb = React.lazy(() => import("pages/Ordersweb"));
const DarkCalls = React.lazy(() => import("pages/DarkCalls"));
const DarkContacts = React.lazy(() => import("pages/DarkContacts"));
const DarkChats = React.lazy(() => import("pages/DarkChats"));
const DarkProfile = React.lazy(() => import("pages/DarkProfile"));
const Addweb = React.lazy(() => import("pages/Addweb"));
const Categoryweb = React.lazy(() => import("pages/Categoryweb"));
const LightPointofSaleSettings = React.lazy(() =>
  import("pages/LightPointofSaleSettings")
);
const LightPointofSaleEmployeeShift = React.lazy(() =>
  import("pages/LightPointofSaleEmployeeShift")
);
const LightPointofSaleCoupons = React.lazy(() =>
  import("pages/LightPointofSaleCoupons")
);
const LightPointofSaleEditProduct = React.lazy(() =>
  import("pages/LightPointofSaleEditProduct")
);
const Finnauksjon = React.lazy(() => import("pages/Finnauksjon"));
const LightPointofSaleProducts = React.lazy(() =>
  import("pages/LightPointofSaleProducts")
);
const LightPointofSaleCustomers = React.lazy(() =>
  import("pages/LightPointofSaleCustomers")
);
const LightPointofSaleAnalytics = React.lazy(() =>
  import("pages/LightPointofSaleAnalytics")
);
const LightPointofSaleDashboard = React.lazy(() =>
  import("pages/LightPointofSaleDashboard")
);
const AuksjonOnclikk = React.lazy(() => import("pages/AuksjonOnclikk"));
const Auksjon = React.lazy(() => import("pages/Auksjon"));
const Draftgridweb = React.lazy(() => import("pages/Draftgridweb"));
const Draftselectedweb = React.lazy(() => import("pages/Draftselectedweb"));
const DetailBuilding = React.lazy(() => import("pages/DetailBuilding"));
const HomeOne = React.lazy(() => import("pages/HomeOne"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const Register = React.lazy(() => import("pages/Register"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/homeone" element={<HomeOne />} />
          <Route path="/detailbuilding" element={<DetailBuilding />} />
          <Route path="/draftselectedweb" element={<Draftselectedweb />} />
          <Route path="/draftgridweb" element={<Draftgridweb />} />
          <Route path="/auksjon" element={<Auksjon />} />
          <Route path="/auksjononclikk" element={<AuksjonOnclikk />} />
          <Route
            path="/lightpointofsaledashboard"
            element={<LightPointofSaleDashboard />}
          />
          <Route
            path="/lightpointofsaleanalytics"
            element={<LightPointofSaleAnalytics />}
          />
          <Route
            path="/lightpointofsalecustomers"
            element={<LightPointofSaleCustomers />}
          />
          <Route
            path="/lightpointofsaleproducts"
            element={<LightPointofSaleProducts />}
          />
          <Route path="/finnauksjon" element={<Finnauksjon />} />
          <Route
            path="/lightpointofsaleeditproduct"
            element={<LightPointofSaleEditProduct />}
          />
          <Route
            path="/lightpointofsalecoupons"
            element={<LightPointofSaleCoupons />}
          />
          <Route
            path="/lightpointofsaleemployeeshift"
            element={<LightPointofSaleEmployeeShift />}
          />
          <Route
            path="/lightpointofsalesettings"
            element={<LightPointofSaleSettings />}
          />
          <Route path="/categoryweb" element={<Categoryweb />} />
          <Route path="/addweb" element={<Addweb />} />
          <Route path="/darkprofile" element={<DarkProfile />} />
          <Route path="/darkchats" element={<DarkChats />} />
          <Route path="/darkcontacts" element={<DarkContacts />} />
          <Route path="/darkcalls" element={<DarkCalls />} />
          <Route path="/ordersweb" element={<Ordersweb />} />
          <Route path="/orderskanbanweb" element={<Orderskanbanweb />} />
          <Route path="/darkbookmark" element={<DarkBookmark />} />
          <Route path="/darksettings" element={<DarkSettings />} />
          <Route path="/jobfindertwo" element={<JobFinderTwo />} />
          <Route path="/realestateone" element={<RealEstateOne />} />
          <Route path="/livesaleswhatnot" element={<LiveSaleswhatnot />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/property" element={<Property />} />
          <Route path="/taskdashboard" element={<TaskDashboard />} />
          <Route path="/dashboarddarkmode" element={<DashboardDarkmode />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/weather" element={<Weather />} />
          <Route
            path="/realestatedashboard"
            element={<RealEstateDashboard />}
          />
          <Route path="/overviewone" element={<OverviewOne />} />
          <Route path="/propertyone" element={<PropertyOne />} />
          <Route path="/nftdark" element={<NFTDark />} />
          <Route path="/dashboardone" element={<DashboardOne />} />
          <Route
            path="/onlinetaxidashboard"
            element={<OnlineTaxiDashboard />}
          />
          <Route path="/dashboardthree" element={<DashboardThree />} />
          <Route path="/realestate" element={<RealEstate />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/homepagevone" element={<HomepageVOne />} />
          <Route path="/leieinn" element={<LeieInn />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/musicplay" element={<MusicPlay />} />
          <Route path="/frammallsbuy" element={<FraMmallsBuy />} />
          <Route path="/finnhotel" element={<FinnHotel />} />
          <Route path="/ipadminieight" element={<IPadminiEight />} />
          <Route path="/ipadminieleven" element={<IPadminiEleven />} />
          <Route path="/ipadminiten" element={<IPadminiTen />} />
          <Route path="/homedark" element={<HomeDark />} />
          <Route path="/citytempone" element={<CityTempOne />} />
          <Route path="/citytemp" element={<CityTemp />} />
          <Route path="/one" element={<One />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/formaddnewcampaign" element={<FormAddNewCampaign />} />
          <Route path="/dashboard1" element={<Dashboard1 />} />
          <Route path="/adscampaignlist" element={<AdsCampaignList />} />
          <Route
            path="/socialnetworkcampaignlist"
            element={<SocialNetworkCampaignList />}
          />
          <Route path="/spendinglisttable" element={<SpendingListTable />} />
          <Route path="/jobfinder" element={<JobFinder />} />
          <Route
            path="/dashboarddarkmodeone"
            element={<DashboardDarkmodeOne />}
          />
          <Route path="/jobfinderone" element={<JobfinderOne />} />
          <Route path="/macbookprotwo" element={<MacBookProTwo />} />
          <Route
            path="/sewujobjobfinderdashboard"
            element={<SewuJobJobFinderDashboard />}
          />
          <Route path="/dekstoptwo" element={<DekstopTwo />} />
          <Route path="/foodplandashboard" element={<FoodPlanDashboard />} />
          <Route
            path="/onlinecoursesearchpage"
            element={<OnlineCourseSearchpage />}
          />
          <Route path="/dekstopone" element={<DekstopOne />} />
          <Route path="/eventdashboard" element={<EventDashboard />} />
          <Route path="/propertydashboard" element={<PropertyDashboard />} />
          <Route
            path="/ultimatecoursedashboard"
            element={<UltimateCourseDashboard />}
          />
          <Route path="/dashboardchat" element={<Dashboardchat />} />
          <Route path="/dekstop" element={<Dekstop />} />
          <Route
            path="/nofonftmarketplacedashboard"
            element={<NOFONFTMarketplaceDashboard />}
          />
          <Route path="/videoanalysis" element={<VideoAnalysis />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route
            path="/aucaaudiobookdashboard"
            element={<AucaAudioBookDashboard />}
          />
          <Route path="/singlephotoone" element={<SinglePhotoOne />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route
            path="/loginone"
            element={<ProtectedRoute element={LoginOne} />}
          />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/signup" element={<ProtectedRoute element={Signup} />} />
          <Route path="/videochat" element={<VideoChat />} />
          <Route path="/directmessage" element={<DirectMessage />} />
          <Route path="/settingstwo" element={<SettingsTwo />} />
          <Route path="/myfriends" element={<MyFriends />} />
          <Route
            path="/passwordrecovery"
            element={<ProtectedRoute element={PasswordRecovery} />}
          />
          <Route path="/videofullscreen" element={<VideoFullScreen />} />
          <Route path="/singlestory" element={<SingleStory />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/events" element={<Events />} />
          <Route path="/singlevideo" element={<SingleVideo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/singleevent" element={<SingleEvent />} />
          <Route path="/groupmessage" element={<GroupMessage />} />
          <Route path="/singlephoto" element={<SinglePhoto />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/homepagevtwo" element={<HomepageVTwo />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/homepagevthree" element={<HomepageVThree />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route
            path="/categorieswithsidebar"
            element={<CategorieswithSidebar />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/onlywebsite" element={<Onlywebsite />} />
          <Route path="/history" element={<History />} />
          <Route path="/aktivitet" element={<Aktivitet />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/landingalt" element={<LandingAlt />} />
          <Route path="/companydetail" element={<CompanyDetail />} />
          <Route path="/ownerpreview" element={<Ownerpreview />} />
          <Route path="/creatoronclick" element={<CreatorOnclick />} />
          <Route path="/activebid" element={<ActiveBid />} />
          <Route path="/market" element={<Market />} />
          <Route path="/dashboardtwo" element={<DashboardTwo />} />
          <Route path="/settingsone" element={<SettingsOne />} />
          <Route
            path="/myprofilecollection"
            element={<MyProfileCollection />}
          />
          <Route path="/marketdetail" element={<MarketDetail />} />
          <Route path="/myprofilehistory" element={<MyProfileHistory />} />
          <Route path="/otheruserprofile" element={<OtherUserProfile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/message" element={<Message />} />
          <Route path="/myprofilepreview" element={<MyProfilePreview />} />
          <Route path="/myprofilewallet" element={<MyProfileWallet />} />
          <Route path="/messageone" element={<MessageOne />} />
          <Route
            path="/top10netflixcombyhtmltodesignfreeversion18two"
            element={<Top10netflixcombyhtmltodesignFREEversion18Two />}
          />
          <Route path="/htmltode" element={<Htmltode />} />
          <Route
            path="/wwwmsncombyhtmltodesignfreeversion19022023"
            element={<WwwmsncombyhtmltodesignFREEversion19022023 />}
          />
          <Route
            path="/notionformsiobyhtmltodesignfreeversion1902twenty"
            element={<NotionformsiobyhtmltodesignFREEversion1902Twenty />}
          />
          <Route
            path="/wwwslottsfjellnobyhtmltodesignfreeversion18zerotwo"
            element={<WwwslottsfjellnobyhtmltodesignFREEversion18ZeroTwo />}
          />
          <Route
            path="/wwwnetflixcombyhtmltodesignfreeversion1802two"
            element={<WwwnetflixcombyhtmltodesignFREEversion1802Two />}
          />
          <Route
            path="/wwwslottsfjellnobyhtmltodesignfreeversion18zeroone"
            element={<WwwslottsfjellnobyhtmltodesignFREEversion18ZeroOne />}
          />
          <Route path="/div" element={<Div />} />
          <Route path="/homepage2dark" element={<Homepage2Dark />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route
            path="/wwwslottsfjellnobyhtmltodesignfreeversion18zero"
            element={<WwwslottsfjellnobyhtmltodesignFREEversion18Zero />}
          />
          <Route path="/raw" element={<Raw />} />
          <Route
            path="/wwwgrundervekstnobyhtmltodesignfreeversion18"
            element={<WwwgrundervekstnobyhtmltodesignFREEversion18 />}
          />
          <Route path="/reditedraw" element={<Reditedraw />} />
          <Route
            path="/httpslatinaspycomstories"
            element={<Httpslatinaspycomstories />}
          />
          <Route path="/pr" element={<Pr />} />
          <Route
            path="/folkeinvestnobyhtmltodesignfreeversion1802twenty"
            element={<FolkeinvestnobyhtmltodesignFREEversion1802Twenty />}
          />
          <Route path="/divpage" element={<Divpage />} />
          <Route path="/divone" element={<DivOne />} />
          <Route path="/edited" element={<Edited />} />
          <Route path="/lando" element={<Lando />} />
          <Route path="/two" element={<Two />} />
          <Route
            path="/faphousecombyhtmltodesignfreeversion03032023"
            element={<FaphousecombyhtmltodesignFREEversion03032023 />}
          />
          <Route
            path="/wwwnetflixcombyhtmltodesignfreeversion0203two"
            element={<WwwnetflixcombyhtmltodesignFREEversion0203Two />}
          />
          <Route path="/option" element={<Option />} />
          <Route
            path="/theporndudecombyhtmltodesignfreeversion0303two"
            element={<TheporndudecombyhtmltodesignFREEversion0303Two />}
          />
          <Route
            path="/wwwbokklubbennobyhtmltodesignfreeversion04three"
            element={<WwwbokklubbennobyhtmltodesignFREEversion04Three />}
          />
          <Route path="/opt" element={<Opt />} />
          <Route
            path="/wwwzolacombyhtmltodesignfreeversion01032023"
            element={<WwwzolacombyhtmltodesignFREEversion01032023 />}
          />
          <Route
            path="/placeitnetbyhtmltodesignfreeversion21022023"
            element={<PlaceitnetbyhtmltodesignFREEversion21022023 />}
          />
          <Route
            path="/getdoordashcombyhtmltodesignfreeversion0103"
            element={<GetdoordashcombyhtmltodesignFREEversion0103 />}
          />
          <Route path="/land" element={<Land />} />
          <Route path="/landone" element={<LandOne />} />
          <Route
            path="/placeitnetbyhtmltodesignfreeversion21022023one"
            element={<PlaceitnetbyhtmltodesignFREEversion21022023One />}
          />
          <Route path="/landthree" element={<LandThree />} />
          <Route path="/ladone" element={<LadOne />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
