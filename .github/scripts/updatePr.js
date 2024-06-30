module.exports = async ({ github, context }) => {
  let isFirstComment = true;
  let commentId = null;

  const response = await github.rest.issues.listComments({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
  });

  for (let comment of response.data) {
    if (
      comment.user.type === 'Bot' &&
      comment.user.login === 'github-actions[bot]'
    ) {
      isFirstComment = false;
      commentId = comment.id;
      break;
    }
  }

  if (isFirstComment) {
    await github.rest.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: `🚀 Preview URL: ${process.env.DEPLOYMENT_URL}`,
    });
  } else {
    await github.rest.issues.updateComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      comment_id: commentId,
      body: `🚀 Preview URL: ${process.env.DEPLOYMENT_URL}`,
    });
  }
};
