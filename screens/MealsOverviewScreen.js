import { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  // react navigation의 screen으로 등록된 컴포넌트라면 navigation, route 프롭을 받을 수 있고 route에는 params가 존재한다.******* 중요
  // const route = useRoute(); // screen으로 등록되지 않은 중첩 컴포넌트에서 라우터에 접근할 때는 이를 사용한다.(등록된 컴포넌트도 사용해도 무방)
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    //useLayoutEffect: 컴포넌트가 렌더링 되기 전에 부수 효과를 실행
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
