import { Text, View, Image, Pressable } from "react-native"
import { repositoryStyles } from "../theme";
import { useNavigate } from 'react-router-native';

const RepositoryItem = ({fullName, language, stargazersCount, forksCount, reviewCount, ratingAverage, description, ownerAvatarUrl, id}) => {

  const navigate = useNavigate()

  const displayValue = (val) => {
    if (val === undefined || val === null) {
      return 'N/A';
    }
    return val > 1000 ? (val/1000).toFixed(1) + 'k' : val.toString();
  }
  
  const onPress = () => {
    navigate(`/repository/${id}`)
  }

  return (
    <Pressable onPress={onPress}>
      <View style={repositoryStyles.container} testID="repositoryItem">
        <View style={repositoryStyles.topRow}>
          <Image
            style = {repositoryStyles.image}
            source={{uri: ownerAvatarUrl}}
          />
          <Text style={repositoryStyles.textContainer}>
            <Text style={repositoryStyles.boldText}> {fullName}  {"\n"} </Text>
            {description}
          </Text>
        </View>
        <View style={repositoryStyles.middleRow}>
          <View style={repositoryStyles.languageContainer}>
            <Text style={repositoryStyles.languageText}>
              {language}
            </Text>
          </View>
        </View>
        <View style={repositoryStyles.bottomRow}>
        <Text style={repositoryStyles.boldText}>
            {displayValue(stargazersCount)}{"\n"}
            Stars
          </Text>
          <Text style={repositoryStyles.boldText}>
          {displayValue(forksCount)}{"\n"}
            Forks
          </Text>
          <Text style={repositoryStyles.boldText}>
          {displayValue(reviewCount)}{"\n"}
            Reviews
          </Text>
          <Text style={repositoryStyles.boldText}>
          {displayValue(ratingAverage)}{"\n"}
            Rating
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default RepositoryItem