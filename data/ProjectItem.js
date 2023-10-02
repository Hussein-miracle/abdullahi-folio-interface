class ProjectItem{
  constructor(name,description,stacks,githubLink = '',liveLink = '',isProduct = false){
    this.name = name;
    this.description = description;
    this.stacks = stacks;
    this.githubLink = githubLink;
    this.liveLink = liveLink;
    this.isProduct = isProduct;
  }
}

export default ProjectItem;