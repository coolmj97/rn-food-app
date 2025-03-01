import { useNavigation } from '@react-navigation/native';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import MealDetails from './MealDetails';

function MealItem({ id, title, imageUrl, duration, complexity, affordability, onPress }) {
  //컴포넌트 내부에서 내비게이션 사용하는 방법

  // const navigation = useNavigation();

  // navigation.navigate('MealDetail', {
  //   mealId: id,
  // });

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image src={imageUrl} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },

  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden', //ios 이슈: 외부뿐만 아니라 내부 컨테이너에 따로 스타일을 지정해줘야함
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
});
