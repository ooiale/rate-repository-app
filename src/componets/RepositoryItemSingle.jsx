import { Text, View, Image, Pressable, Linking } from "react-native"
import { repositoryStyles } from "../theme";
import { useParams } from 'react-router-native';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_REPOSITORY_URL, GET_REPOSITORY_BY_ID } from '../graphql/queries';
import ReviewContainer from "./ReviewContainer";

const displayValue = (val) => {
  return val > 1000 ? (val/1000).toFixed(1) + 'k' : val.toString();
}

const RepositoryItemSingle = () => {
  const { id } = useParams();

  const [fetchRepositoryUrl, { loading: urlLoading }] = useLazyQuery(GET_REPOSITORY_URL);
  
  const { data: repositoryData, loading: repositoryLoading } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { id },
  });

  if (urlLoading || repositoryLoading) {
    return (
      <Text> Loading ... </Text>
    )
  }

  const { fullName, language, stargazersCount, forksCount, reviewCount, ratingAverage, description, ownerAvatarUrl } = repositoryData.repository;
  
  const handlePress = async() => {
    const data = await fetchRepositoryUrl({variables: {id}})
    const url = data.data.repository.url
    Linking.openURL(url)
  }

  return (

    
    <View style={repositoryStyles.containerReview} testID="repositoryItem">
      <View style={repositoryStyles.topRowReview}>
        <Image
          style = {repositoryStyles.image}
          source={{uri: ownerAvatarUrl}}
        />
        <Text style={repositoryStyles.textContainer}>
          <Text style={repositoryStyles.boldText}> {fullName}  {"\n"} </Text>
          {description}
        </Text>
      </View>
      <View style={repositoryStyles.middleRowReview}>
        <View style={repositoryStyles.languageContainer}>
          <Text style={repositoryStyles.languageText}>
            {language}
          </Text>
        </View>
      </View>
      <View style={repositoryStyles.bottomRowReview}>
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
      <View style={{backgroundColor: '#f0f0f0'}}>
        <Pressable 
          style={repositoryStyles.repositoryItemButton} 
          onPress={handlePress}>
          <Text style={repositoryStyles.languageText}> 
            Open in GitHub
          </Text>
        </Pressable>
      </View>
      <ReviewContainer id={id}/>
    </View>
    
  )
}

export default RepositoryItemSingle