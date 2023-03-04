import { useNavigate, useLocation, useParams, createSearchParams } from 'react-router-dom';
import { URLSearchParams } from 'url';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  // Use to navigate to different pages
  const navigateTo = (link: string, state: Record<string, string>, params: URLSearchParams) => {
    navigate(
      {
        pathname: link,
        search: createSearchParams(params).toString(),
      },
      { state: state },
    );
  };

  return { navigateTo, location, params, search: location.search };
};
