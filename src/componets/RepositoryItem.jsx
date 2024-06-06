import { Text, View, Image } from "react-native"
import { repositoryStyles } from "../theme";

const RepositoryItem = ({fullName, language, stargazersCount, forksCount, reviewCount, ratingAverage, description, ownerAvatarUrl}) => {



  const displayValue = (val) => {
    return val > 1000 ? (val/1000).toFixed(1) + 'k' : val.toString();
  }
  

  return (
    <View style={repositoryStyles.container}>
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
  )
}

export default RepositoryItem