module.exports = async ({ github, context }) => {
  const commentsResponse = await github.rest.issues.listComments({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
  });

  for (let comment of commentsResponse.body) {
    if (
      comment.user.type === "bot" &&
      comment.user.login === "github-actions"
    ) {
      await github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: `🚀 Preview URL: ${process.env.DEPLOYMENT_URL}`,
      });
      break;
    }
  }
};
