import Clock from "../Clock/Clock"
import SearchIcon from '@mui/icons-material/Search';

const FindTask: React.FC = () => {
  return (
    <div className="searching-container">
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Find your Task..."/>
      </div>

      <div className="header-date-and-time">
        <div className="header-time">

        </div>

        <div className="header-date">

        </div>
      </div>

      <Clock />
    </div>
  )
}

export default FindTask;
