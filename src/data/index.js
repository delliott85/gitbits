import { tags } from '../../constants';

/*
    {
        command: [string],
        link: [string],
        description: [string],
        when: [string],
        flags: [array]
    }
*/

export const commands = [
    {
        tag: tags.TAG_SETUP,
        command: 'git config',
        link: 'https://git-scm.com/docs/git-config',
        description: 'Set values in the main git configuration file.',
        when: 'Now is the time to set out your stall and define some basic user information so your changes can attributed to / blamed on you. Don\'t worry, you can change your name whenever you like, so you won\'t be stuck with "Devmeister69" as your username forever'
    },
    {
        tag: tags.TAG_START,
        command: 'git init',
        link: 'https://git-scm.com/docs/git-init',
        description: 'Initialise a new local git respository.',
        when: 'The beginning of every successful project, and every failed one, but don\'t let that stop you from creating your weather app.',
        flags: [
            {
                command: '[directory]',
                description: 'Define a specific sub-directory path to turn into a Git repository.'
            }
        ]
    },
    {
        tag: tags.TAG_START,
        command: 'git remote',
        link: 'https://git-scm.com/docs/git-remote',
        description: 'Manage your tracked remote repositories',
        when: '',
        flags: [
            {
                command: 'add [remote-name] [remote-url]',
                description: 'Add a new remote reporistory to your project.'
            },
            {
                command: 'remove [remote-name]',
                description: 'Remove the remote repository from your project.'
            },
            {
                command: '-v',
                description: 'List remotes that are currently associated with this repository.'
            }
        ]
    },
    {
        tag: tags.TAG_START,
        command: 'git clone',
        link: 'https://git-scm.com/docs/git-clone',
        description: 'Clone a repository from a remote source (Github, BitBucket, etc.)',
        when: 'For when you don\'t to spend a third of your adult life configuring webpack and all of your dependencies from scratch and would rather just crack on with a bare bones Gatsby starter.',
        flags: [
            {
                command: '[remote-repository-url]',
                description: 'The URL of the remote repository you wish to clone.'
            },
            {
                command: '--branch [remote-branch-name]',
                description: 'Clone a specific branch from the cloned repository rather than the main.'
            }
        ]
    },
    {
        tag: tags.TAG_BRANCH,
        command: 'git checkout',
        link: 'https://git-scm.com/docs/git-checkout',
        description: 'Update files in your local repository to match those of a different branch.',
        flags: [
            {
                command: '[branch-name]',
                description: 'Specify the remote branch to be checked out.'
            },
            {
                command: '-b',
                description: 'Create a new local branch when checking out the remote branch.'
            }
        ]
    },
    {
        tag: tags.TAG_BRANCH,
        command: 'git switch',
        link: 'https://git-scm.com/docs/git-switch',
        description: 'Swtich between previously checked-out, or newly created, branches.',
        flags: [
            {
                command: '[branch-name]',
                description: 'Specify the branch you would like to switch to.'
            },
            {
                command: '--discard-changes',
                description: 'If the working tree is different from <pre>HEAD</pre> then discard all changes before switching branches.'
            }
        ]
    },
    {
        tag: tags.TAG_SNAPSHOT,
        command: 'git add',
        link: 'https://git-scm.com/docs/git-add',
        description: 'Stage local changes ready for the next commit',
        when: 'When you think you\'re ready to send your changes out into the wild. Usually followed by foul language when you realise you\'ve made a typo in one of your class names.',
        flags: [
            {
                command: '[pathspec]',
                description: 'Choose specific files to add to staging.'
            },
            {
                command: '--all',
                description: 'Add all changes to staging without needing to specify <pre>[pathspec]</pre>.'
            }
        ]
    },
    {
        tag: tags.TAG_SNAPSHOT,
        command: 'git commit',
        link: 'https://git-scm.com/docs/git-commit',
        description: 'Commit your staged changes ready for pushing to your remote repository',
        when: 'When you\'ve missed the typo in your class name and are still under the illusion that the changes you\'ve made are perfect.',
        flags: [
            {
                command: '--message="message"',
                description: 'Add a descriptive message of the changes present in this commit.'
            },
            {
                command: '--no-verify',
                description: 'Bypass any pre-commit hooks you may have set.'
            }
        ]
    },
    {
        tag: tags.TAG_SNAPSHOT,
        command: 'git rm',
        link: 'https://git-scm.com/docs/git-rm',
        description: 'Remove files from your local repository.',
        flags: [
            {
                command: '[pathspec]',
                description: 'Choose the specific file(s) to remove from the working tree.'
            },
            {
                command: '--force',
                description: 'Overrides the up-to-date check.'
            }
        ]
    },
    {
        tag: tags.TAG_SHARE,
        command: 'git push',
        link: 'https://git-scm.com/docs/git-push',
        description: 'Push your committed changes to your remote repository',
        when: 'It\'s too late now, best not to draw attention to yourself, hopefully nobody will notice the <pre>.haeder</pre> CSS rules.',
        flags: [
            {
                command: '[remote-name] [remote-branch-name]',
                description: 'Specify which remote and which remote branch to push your changes to.'
            }
        ]
    },
    {
        tag: tags.TAG_SHARE,
        command: 'git pull',
        link: 'https://git-scm.com/docs/git-pull',
        description: 'Pull changes made and pushed to the remote repository.',
        when: 'When enough time has passed and you feel ready to fix your typo so you pull the latest code only to discover someone has already fixed it.',
        flags: [
            { 
                command: '[remote-name] [remote-branch-name]',
                description: 'Specify the remote and which remote branch to pull your changes from. Just like <pre>git push</pre>.'
            }
        ]
    },
    {
        tag: tags.TAG_BRANCH,
        command: 'git merge',
        link: 'https://git-scm.com/docs/git-merge',
        description: 'Merge changes from one branch to another.',
        flags: [
            {
                command: '[branch-name]',
                description: 'Specify the branch from which to merge changes into the current branch.'
            }
        ]
    },
    {
        tag: tags.TAG_SNAPSHOT,
        command: 'git reset',
        link: 'https://git-scm.com/docs/git-reset',
        description: 'Reset your local repository, discarding all unstaged changes.',
        flags: [
            {
                command: '--hard HEAD',
                description: 'Discard all changes to unstages files and reset the repository to the most recent commit on the currecnt branch.'
            }
        ]
    },
    {
        tag: tags.TAG_BRANCH,
        command: 'git stash',
        link: 'https://git-scm.com/docs/git-stash',
        description: 'Store changes made to files in your local repository while also reverting to a clean working tree.',
        flags: [
            {
                command: '--all',
                description: 'Stash changes to all files, uncluding those which are untracked and/or ignored.'
            },
            {
                command: 'pop',
                description: 'Apply the topmost stash to the working tree and then discard it from the stash list.'
            },
            {
                command: 'apply',
                description: 'Similar to <pre>git stash pop</pre> except the stash is kept in the stash list.'
            }
        ]
    },
    {
        tag: tags.TAG_PATCH,
        command: 'git cherry-pick',
        link: 'https://git-scm.com/docs/git-cherry-pick',
        description: 'Apply a commit from one branch and apply it to another without merging the entire branch. Make sure you are on the branch that you would like to apply commits to.',
        flags: [
            {
                command: '[commit-hash]',
                description: 'Define the commit you wish to cherry pick into the current branch.w'
            }
        ]
    },
    {
        tag: tags.TAG_INSPECT,
        command: 'git log',
        link: 'https://git-scm.com/docs/git-log',
        description: 'Show commit logs from the currently checkout out branch.',
        flags: [
            {
                command: '--since=<date>',
                description: 'Show committed changes since a specified date. An <pre>--until</pre> flag also exists to show commits up until a specified date.'
            },
            {
                command: '--author=<author-name>',
                description: 'Show commits from a specific author.'
            },
            {
                command: '--name-only',
                description: 'Only show the names of the changed files.'
            }
        ]
    },
    {
        tag: tags.TAG_SNAPSHOT,
        command: 'git status',
        link: 'https://git-scm.com/docs/git-status',
        description: 'Show differences in files in your local repository compared to the HEAD commit of the current branch.',
        flags: [
            {
                command: '-s',
                description: 'Output the data in a shorthand format.'
            },
            {
                command: '-v',
                description: 'Output data in a more detailed format.'
            }
        ]
    }
]
