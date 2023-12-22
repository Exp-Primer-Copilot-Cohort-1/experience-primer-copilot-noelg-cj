function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['js', 'html', 'css']
    };

    var skills = member.skills;
    skills.push('php');

    console.log(member.skills);
}