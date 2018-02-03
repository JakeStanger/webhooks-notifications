num_teams = 3
teams = []
for i in range(num_teams):
    valid = False
    while not valid:
        try:
            team = input("Enter team " + i + ": ")
            teams.append(team)
        except:
            print("Your input was not valid")
